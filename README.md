
### 

# ActiveWidgets/HTML • Datagrid 

[![npm version](https://img.shields.io/npm/v/@activewidgets/html)](https://www.npmjs.com/package/@activewidgets/html "View this project on npm")
[![npm downloads](https://img.shields.io/npm/dm/@activewidgets/html)](https://www.npmjs.com/package/@activewidgets/html "npm package downloads/month")
[![Github issues](https://img.shields.io/github/issues/activewidgets/html)](https://github.com/activewidgets/html/issues "See Github issues")
[![Github repo](https://img.shields.io/github/stars/activewidgets/html?label=GitHub&style=social)](https://github.com/activewidgets/html "Open Github repo")

ActiveWidgets is a multi-framework UI component library. This package provides **datagrid component** as **HTML5/CustomElement**.

[Live demo](https://html.activewidgets.com) / [Developer guide](https://docs.activewidgets.com/guide/) / [API reference](https://docs.activewidgets.com/api/)

[![Datagrid demo](https://cdn.activewidgets.com/assets/screens/demo.png)](https://html.activewidgets.com)

- [Installation](#installation)
- [Usage](#usage)
- [CDN links](#cdn-links)
- [Data properties](#data-properties)
- [User events](#user-events)


## Installation

Add [@activewidgets/html](https://docs.activewidgets.com/api/packages/html/) to your project dependencies -

```sh
> npm i --save @activewidgets/html
```


## Usage

Import the library into your app to register the custom element tags -

```js
import "@activewidgets/html";
```

The `ax-...` tags will now function as ActiveWidgets components.

```html
<ax-datagrid>Loading...</ax-datagrid>
```

You can then assign properties and event handlers using standard DOM API.

```js
const el = document.querySelector('ax-datagrid');

el.rows = [
    { message: 'Hello, World!' }
];
```

[Live example](https://html.activewidgets.com/examples/local/hello-world/) | [Source on github](https://github.com/activewidgets/html/tree/master/examples/hello-world) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/html/tree/master/examples/hello-world)


## CDN links

For quick prototyping the package is also available over ActiveWidgets CDN -

```html
<script src="https://cdn.activewidgets.com/html"></script>
```

[Live example](https://html.activewidgets.com/examples/local/cdn-es5/) | [Source on github](https://github.com/activewidgets/html/tree/master/examples/cdn-es5) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/html/tree/master/examples/cdn-es5)


## Data properties

You have to provide [columns](https://docs.activewidgets.com/api/datagrid/columns/) and [rows](https://docs.activewidgets.com/api/datagrid/rows/) properties to the datagrid to show some data. The properties of each `column` object define how the data will be rendered -

- [field](https://docs.activewidgets.com/api/datagrid/columns/#field) - where the cell data comes from (string|function)
- [header](https://docs.activewidgets.com/api/datagrid/columns/#header) - column header (string|object)
- [width](https://docs.activewidgets.com/api/datagrid/columns/#width) - column width (number, in pixels)
- [align](https://docs.activewidgets.com/api/datagrid/columns/#align) - cell text alignment (left|right|center)
- [format](https://docs.activewidgets.com/api/datagrid/columns/#format) - number/date format (string|function)
- [fixed](https://docs.activewidgets.com/api/datagrid/columns/#fixed) - fixed (true/false) for columns on the left or right side

The `style` (string|object) or `className` properties allow to change the styling of the column and cell elements.

```js
const el = document.querySelector('ax-datagrid');

el.columns = [
  { header: 'Code', field: 'customerID', width: 80, style: 'background:#def', fixed: true },
  { header: 'Company Name', field: 'companyName', width: 160 },
  { header: 'Contact', field: 'contactName', width: 120 },
  { header: 'Title', field: 'contactTitle', width: 120 },
  { header: 'Address', field: 'address', width: 120, align: 'right' }
];

el.rows = northwind.customers;
```

[Live example](https://html.activewidgets.com/examples/local/columns/) | [Source on github](https://github.com/activewidgets/html/tree/master/examples/columns) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/html/tree/master/examples/columns)


## User events

In addition to the standard DOM keyboard and mouse events the datagrid emits composite 
[mouse](https://docs.activewidgets.com/api/datagrid/mouse-event/) event which makes it easier to find the elements affected by the user action.

```js
function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}

const el = document.querySelector('ax-datagrid');

el.columns = columns;
el.rows = rows;

el.addEventListener('mouse', event => onMouse(event.detail), true);
```

[Live example](https://html.activewidgets.com/examples/local/events/) | [Source on github](https://github.com/activewidgets/html/tree/master/examples/events) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/html/tree/master/examples/events)

When assigning an event handler, note that the event data is passed in the `event.detail` property (we are using DOM CustomEvent class).  

ActiveWidgets custom events do not bubble, so you should always add an event handler at the component itself, not at some parent element.


## More info

- [Live demo](https://react.activewidgets.com) 
- [Developer guide](https://docs.activewidgets.com/guide/) 
- [API reference](https://docs.activewidgets.com/api/)
- [Licensing](https://activewidgets.com/licenses/)
- [Support forum](https://activewidgets.com/messages/)


---

[![ActiveWidgets](https://activewidgets.com/include/logo/aw-logo-40.png)](https://activewidgets.com) 


