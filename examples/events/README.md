
[Open fullscreen](/events/) | [Source on github](https://github.com/activewidgets/html/tree/master/examples/events) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/html/tree/master/examples/events)

The datagrid emits composite [mouse](https://activewidgets.com/api/datagrid/mouse-event/) event 
which makes it easier to find the elements affected by the user action -

```js
function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}

const el = document.querySelector('ax-datagrid');

el.addEventListener('mouse', event => onMouse(event.detail), true);
```

Read more:

- [HTML Datagrid - Get started](https://activewidgets.com/guide/env/html/#user-events)
- [API - mouse event](https://activewidgets.com/api/datagrid/mouse-event/)