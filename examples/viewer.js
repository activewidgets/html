
import * as components from '../';
import * as pages from './index.js';


let el = document.querySelector('#app'),
    lookup = {},
    links = [],
    key = 1;

Object.keys(components).forEach(i => {

    let Comp = components[i];

    if (typeof Comp == 'function' && Comp.prototype.mount){
        Comp.tag = 'ax-' + i.toLowerCase();
    }
});


function path(s){
    return '/' + s.replace(/^\W+|\W+$/g, '').replace(/\W+/g, '-').toLowerCase();
}


Object.keys(pages).forEach(section => {
    links.push(`<div class="menu-header">${section}</div>`);
    Object.keys(pages[section]).forEach(name => {
        let url = path(section) + path(name);
        lookup[url] = pages[section][name];
        links.push(`<div class="menu-item"><a href="#view${url}">${name}</a></div>`);
    });
});


function index(name){
    el.innerHTML = name ? 'not found ' + name : links.join('');
}


function render(Component, props){

    el.innerHTML = '';

    props.key = ++key;

    let i, node = document.createElement(Component.tag);

    for(i in props){
        node[i] = props[i];
    }

    el.appendChild(node);
}


function refresh(){

    let name = location.hash.replace(/^#(\w+)/, ''),
        mode = RegExp.$1;

    if (name && typeof lookup[name] == 'function') {
        lookup[name]({render}, components, {});
    }
    else {
        index(name);
    }
}


window.addEventListener("hashchange", refresh, false);
refresh();
