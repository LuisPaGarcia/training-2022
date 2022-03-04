# Styling

## Background

There are two primary ways to style react components

1. Inline styles with the `style` prop
2. Regular CSS with the `className` prop

**About the `style` prop:**

- In HTML you'd pass a string of CSS:

```html
<div style="margin-top: 20px; background-color: blue;"></div>
```

- In React, you'll pass an object of CSS:

```jsx
<div style={{marginTop: 20, backgroundColor: 'blue'}} />
```

Note that in react the `{{` and `}}` is actually a combination of a JSX
expression and an object expression. The same example above could be written
like so:

```jsx
const myStyles = {marginTop: 20, backgroundColor: 'blue'}
<div style={myStyles} />
```

Note also that the property names are `camelCased` rather than `kebab-cased`.
This matches the `style` property of DOM nodes (which is a
[`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration)
object).

**About the `className` prop:**

As we discussed earlier, in HTML, you apply a class name to an element with the
`class` attribute. In JSX, you use the `className` prop.

## Exercise

In this exercise we'll use both methods for styling react components.

We have the following css on the page:

```css
.box {
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.box--large {
  width: 270px;
  height: 270px;
}
.box--medium {
  width: 180px;
  height: 180px;
}
.box--small {
  width: 90px;
  height: 90px;
}
```

Your job is to apply the right className and style props to the divs so the
styles applied match the text content.

## Extra Credit

### 1. 💯 Create a custom component


Try to make a custom `<Box />` component that renders a div, accepts all the
props and merges the given `style` and `className` props with the shared values.

I should be able to use it like so:

```jsx
<Box className="box--small" style={{backgroundColor: 'lightblue'}}>
  small lightblue box
</Box>
```

The `box` className and `fontStyle: 'italic'` style should be applied in
addition to the values that come from props.

### 2. 💯 accept a size prop to encapsulate styling

It's great that we're composing the `className`s and `style`s properly, but
wouldn't it be better if the users of our components didn't have to worry about
which class name to apply for a given effect? Or that a class name is involved
at all? I think it would be better if users of our component had a `size` prop
and our component took care of making the box that size.

In this extra credit, try to make this API work:

```jsx
<Box size="small" style={{backgroundColor: 'lightblue'}}>
  small lightblue box
</Box>
```
