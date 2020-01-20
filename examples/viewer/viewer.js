
import {Viewer} from '@activewidgets/examples';
import * as pages from '../index.js';
import '../../';


function mount(component, props = {}){

    let container = document.getElementById('app'),
        target = document.createElement(component);

    Object.keys(props).forEach(i => {
        target[i] = props[i];
    });

    container.innerHTML = '';
    container.appendChild(target);
}


function clean(){
    let container = document.getElementById('app');
    container.innerHTML = '';
}


const viewer = new Viewer({
    target: document.body,
    props: {pages, mount, clean}
});
