
import {getQueriesForElement} from '@testing-library/dom';
import '@activewidgets/components';



export function render(component, props){

    let baseElement = document.body,
        container = baseElement.appendChild(document.createElement('div')),
        el = container.appendChild(document.createElement(component));

    let Element = window.customElements.all[component];

    if (!Element){
        throw new Error('Not found - ' + component);
    }

    for (let i in props){
        if (i.slice(0, 2) == 'on'){
            el.addEventListener(i.slice(2).toLowerCase(), event => props[i](event.detail), true);
        }
        else {
            el[i] = props[i];
        }
    }

    Element.prototype.connectedCallback.call(el);


    return {
        container,
        baseElement,
        ...getQueriesForElement(baseElement)
    }
};


export function cleanup(){
    document.body.innerHTML = '';
};


if (typeof afterEach === 'function') {
    afterEach(cleanup);
}
