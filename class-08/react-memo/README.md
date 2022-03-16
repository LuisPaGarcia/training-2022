## React memo

>React.memo() is a great tool to memoize functional components. When applied correctly, it prevents useless re-renderings when the next props equal to previous ones.

Take precautions when memoizing components that use props as callbacks. Make sure to provide the same callback function instance between renderings.

A great resource to learn when to use react memo: https://dmitripavlutin.com/use-react-memo-wisely/
![when to use react memo](https://dmitripavlutin.com/static/c07d2ce4ede6301197b9605a75ae9b4e/5fd6b/when-to-use-react-memo-infographic.jpg)
