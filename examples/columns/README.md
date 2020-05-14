
[Open fullscreen](/columns/) | [Source on github](https://github.com/activewidgets/html/tree/master/examples/columns) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/html/tree/master/examples/columns)

This example shows how to configure datagrid columns:

```js
import '@activewidgets/html';
import { northwind } from "@activewidgets/examples/data";

const el = document.querySelector('ax-datagrid');

el.columns = [
  {header: 'Code', field: 'customerID', width: 80, style: 'background:#def', fixed: true},
  {header: 'Company Name', field: 'companyName', width: 160},
  {header: 'Contact', field: 'contactName', width: 120},
  {header: 'Title', field: 'contactTitle', width: 120},
  {header: 'Address', field: 'address', width: 120},
  {header: 'City', field: 'city'},
  {header: 'Zip', field: 'postalCode', align: 'right'},
  {header: 'Phone', field: 'phone'},
  {header: 'Fax', field: 'fax'},
  {header: 'Country', field: 'country'}
];

el.rows = northwind.customers;
```

Assign an array of column descriptor objects to the [columns](https://docs.activewidgets.com/api/datagrid/columns/) property.

Read more:

- [HTML Datagrid - Get started](https://docs.activewidgets.com/guide/env/html/#data-properties)
- [API - columns](https://docs.activewidgets.com/api/datagrid/columns/)
- [API - rows](https://docs.activewidgets.com/api/datagrid/rows/)