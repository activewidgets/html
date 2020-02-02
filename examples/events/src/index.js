/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '@activewidgets/html';
import { columns, rows } from "@activewidgets/examples/data";
import './styles.css';


function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}


const el = document.querySelector('ax-datagrid');

el.columns = columns;
el.rows = rows;

el.addEventListener('mouse', event => onMouse(event.detail), true);