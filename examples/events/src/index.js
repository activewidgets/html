
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