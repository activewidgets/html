
import {Viewer} from '@activewidgets/examples';
import '../../';
import * as pages from './examples.js';
import readme from '../README.md';
import logo from './html.svg';
import pkg from '../../package.json';


let framework = 'HTML (Custom Elements)',
    container = document.getElementById('app');


function mount(component, props = {}){

    let target = document.createElement(component);

    Object.keys(props).forEach(i => {
        target[i] = props[i];
    });

    container.innerHTML = '';
    container.appendChild(target);
}


function clean(){
    container.innerHTML = '';
}


container.innerHTML = '';


const viewer = new Viewer({
    target: document.body,
    props: {framework, pkg, logo, readme, pages, mount, clean}
});
