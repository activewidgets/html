
[Open fullscreen](/hello-world/) | [Source on github](https://github.com/activewidgets/html/tree/master/examples/hello-world) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/html/tree/master/examples/hello-world)

This is a small example to get started with ActiveWidgets datagrid.

First, import the library:

```js
import '@activewidgets/html';
```

Then initialize or load the data array:

```js
let rows = [
    { message: 'Hello, World!' }
];
```

Finally, create the component and assign the data:

```js
const el = document.querySelector('ax-datagrid');
el.rows = rows;
```

Thats all! 

Read more:

 - [HTML Datagrid - Get started](https://activewidgets.com/guide/env/html/)