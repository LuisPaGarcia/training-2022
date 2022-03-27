# useCallback: custom hooks

## Background

### Memoization in general

Memoization: a performance optimization technique which eliminates the need to
recompute a value for a given input by storing the original computation and
returning that stored value when the same input is provided. Caching is a form
of memoization. Here's a simple implementation of memoization:

```typescript
const values = {}
function addOne(num: number) {
  if (values[num] === undefined) {
    values[num] = num + 1 // <-- here's the computation
  }
  return values[num]
}
```

One other aspect of memoization is value referential equality. For example:

```typescript
const dog1 = new Dog('sam')
const dog2 = new Dog('sam')
console.log(dog1 === dog2) // false
```

Even though those two dogs have the same name, they are not the same. However,
we can use memoization to get the same dog:

```typescript
const dogs = {}
function getDog(name: string) {
  if (dogs[name] === undefined) {
    dogs[name] = new Dog(name)
  }
  return dogs[name]
}

const dog1 = getDog('sam')
const dog2 = getDog('sam')
console.log(dog1 === dog2) // true
```

You might have noticed that our memoization examples look very similar.
Memoization is something you can implement as a generic abstraction:

```typescript
function memoize<ArgType, ReturnValue>(cb: (arg: ArgType) => ReturnValue) {
  const cache: Record<ArgType, ReturnValue> = {}
  return function memoized(arg: ArgType) {
    if (cache[arg] === undefined) {
      cache[arg] = cb(arg)
    }
    return cache[arg]
  }
}

const addOne = memoize((num: number) => num + 1)
const getDog = memoize((name: string) => new Dog(name))
```

Our abstraction only supports one argument, if you want to make it work for any
type/number of arguments, knock yourself out.

### Memoization in React

Luckily, in React we don't have to implement a memoization abstraction. They
made two for us! `useMemo` and `useCallback`. For more on this read:
[Memoization and React](https://epicreact.dev/memoization-and-react).

You know the dependency list of `useEffect`? Here's a quick refresher:

```javascript
React.useEffect(() => {
  window.localStorage.setItem('count', count)
}, [count]) // <-- that's the dependency list
```

Remember that the dependency list is how React knows whether to call your
callback (and if you don't provide one then React will call your callback every
render). It does this to ensure that the side effect you're performing in the
callback doesn't get out of sync with the state of the application.

But what happens if I use a function in my callback?

```javascript
const updateLocalStorage = () => window.localStorage.setItem('count', count)
React.useEffect(() => {
  updateLocalStorage()
}, []) // <-- what goes in that dependency list?
```

We could just put the `count` in the dependency list and that would
actually/accidentally work, but what would happen if one day someone were to
change `updateLocalStorage`?

```diff
- const updateLocalStorage = () => window.localStorage.setItem('count', count)
+ const updateLocalStorage = () => window.localStorage.setItem(key, count)
```

Would we remember to update the dependency list to include the `key`? Hopefully
we would. But this can be a pain to keep track of dependencies. Especially if
the function that we're using in our `useEffect` callback is coming to us from
props (in the case of a custom component) or arguments (in the case of a custom
hook).

Instead, it would be much easier if we could just put the function itself in the
dependency list:

```javascript
const updateLocalStorage = () => window.localStorage.setItem('count', count)
React.useEffect(() => {
  updateLocalStorage()
}, [updateLocalStorage]) // <-- function as a dependency
```

The problem with that though it will trigger the `useEffect` to run every
render. This is because `updateLocalStorage` is defined inside the component
function body. So it's re-initialized every render. Which means it's brand new
every render. Which means it changes every render. Which means... you guessed
it, our `useEffect` callback will be called every render!

**This is the problem `useCallback` solves**. And here's how you solve it

```javascript
const updateLocalStorage = React.useCallback(
  () => window.localStorage.setItem('count', count),
  [count], // <-- yup! That's a dependency list!
)
React.useEffect(() => {
  updateLocalStorage()
}, [updateLocalStorage])
```

What that does is we pass React a function and React gives that same function
back to us... Sounds kinda useless right? Imagine:

```javascript
// this is not how React actually implements this function. We're just imagining!
function useCallback(callback) {
  return callback
}
```

Uhhh... But there's a catch! On subsequent renders, if the elements in the
dependency list are unchanged, instead of giving the same function back that we
give to it, React will give us the same function it gave us last time. So
imagine:

```javascript
// this is not how React actually implements this function. We're just imagining!
let lastCallback
function useCallback(callback, deps) {
  if (depsChanged(deps)) {
    lastCallback = callback
    return callback
  } else {
    return lastCallback
  }
}
```

So while we still create a new function every render (to pass to `useCallback`),
React only gives us the new one if the dependency list changes.

In this exercise, we're going to be using `useCallback`, but `useCallback` is
just a shortcut to using `useMemo` for functions:

```typescript
// the useMemo version:
const updateLocalStorage = React.useMemo(
  // useCallback saves us from this annoying double-arrow function thing:
  () => () => window.localStorage.setItem('count', count),
  [count],
)

// the useCallback version
const updateLocalStorage = React.useCallback(
  () => window.localStorage.setItem('count', count),
  [count],
)
```

🦉 A common question with this is: "Why don't we just wrap every function in
`useCallback`?" You can read about this in this blog post
[When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback).

🦉 And if the concept of a "closure" is new or confusing to you, then
[give this a read](https://mdn.io/closure). (Closures are one of the reasons
it's important to keep dependency lists correct.)

**People tend to find this exercise more difficult,** so I strongly advise
spending some time understanding how the code works before making any changes!

Also, one thing to keep in mind is that React hooks are a great foundation upon
which to build libraries and many have been built. For that reason, you don't
often need to go this deep into making custom hooks. So if you find this one
isn't clicking for you, know that you _are_ learning and when you _do_ face a
situation when you need to use this knowledge, you'll be able to come back and
it will click right into place.

👨‍💼 Peter the Product Manager told us that we've got more features coming our way
that will require managing async state. We've already got some code for our
pokemon lookup feature (if you've gone through the "React Hooks" workshop
already, then this should be familiar, if not, spend some time playing with the
app to get up to speed with what we're dealing with here). We're going to
refactor out the async logic so we can reuse this in other areas of the app.

**So, your job is** to extract the logic from the `PokemonInfo` component into a
custom and generic `useAsync` hook. In the process you'll find you need to do
some fancy things with dependencies (dependency arrays are the biggest challenge
to deal with when making custom hooks).

NOTE: In this part of the exercise, we don't need `useCallback`. We'll add it in
the extra credits. It's important that you work on this first refactor first so
you can appreciate the value `useCallback` provides in certain circumstances.

## 🦉 Other notes

### `useEffect` and `useCallback`

The use case for `useCallback` in the exercise is a perfect example of the types
of problems `useCallback` is intended to solve. However the examples in these
instructions are intentionally contrived. You can simplify things a great deal
by _not_ extracting code from `useEffect` into functions that you then have to
memoize with `useCallback`. Read more about this here:
[Myths about useEffect](https://epicreact.dev/myths-about-useeffect).

### `useCallback` use cases

The entire purpose of `useCallback` is to memoize a callback for use in
dependency lists and props on memoized components (via `React.memo`, which you
can learn more about from the performance workshop). The _only_ time it's useful
to use `useCallback` is when the function you're memoizing is used in one of
those two situations.

