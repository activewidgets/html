/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Viewer} from '@activewidgets/examples';
import '@activewidgets/html';
import * as pages from './examples.js';
import readme from '../demo/README.md';
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
