/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { tpl } from "@activewidgets/html";
import { northwind } from '@activewidgets/examples/data';
import * as flags from '@activewidgets/examples/flags';
import options from './options';
import './styles.css';


const columns = [
    { header: 'Company', template: 'company', fixed: true },
    { header: 'Contact', template: 'contact', style: 'background:#f4f4f4', key: 'contact' },
    { header: 'Address', template: 'address', key: 'address' },
    { header: 'Country', type: 'country flag', field: 'country' },
    { header: 'Phone/Fax', type: 'phone & fax'},
    { header: 'Last Order', type: 'money', field: 'amount' },
    { header: 'Order Date', type: 'date', field: 'date' }
];

const rows = northwind.customers;

function calc(){
    return {
        amount: 2000 * Math.random(),
        date: Date.now() - 500 * 86400000 * Math.random()
    };
}

const slots = {
    
    company: ({data}) => tpl`<div>
        <div class="bold blue">${data.customerID}</div>
        <div class="small">${data.companyName}</div>
    </div>`,
    
    contact: ({data}) => tpl`<div>
        <div class="bold">${data.contactName}</div>
        <div class="small">${data.contactTitle}</div>
    </div>`,
    
    address: ({data}) => tpl`<div>
        <div class="small">${data.address}</div>
        <div class="small">${data.postalCode} <span>${data.city}</span></div>
    </div>`,
    
    country: ({text}) => tpl`<div><img src=${flags[text]}/>${text}</div>`,
    
    phone: ({data}) => tpl`<div>
        <div class="small phone">${data.phone}</div>
        <div class="small fax">${data.fax}</div>
    </div>`
};

let el = document.querySelector('ax-datagrid');

el.columns = columns;
el.rows = rows;
el.calc = calc;
el.slots = slots;
el.options = options;
