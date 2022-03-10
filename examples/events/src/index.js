/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '@activewidgets/html';
import { columns, rows } from "@activewidgets/examples/data";
import './styles.css';


let gridAPI;

function onInit(event){
    gridAPI = event.detail;
}


function onClick(event){
    let cell = gridAPI.cellFromElement(event.target); 
    if (cell && cell.section === 'main') {
        alert(`row ${cell.row.index + 1} clicked!`);
    }
}


const el = document.querySelector('ax-datagrid');

el.columns = columns;
el.rows = rows;

el.addEventListener('init', onInit, true);
el.addEventListener('click', onClick, true);