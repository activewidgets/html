
require('@testing-library/jest-dom/extend-expect');

if (!window.customElements){
    window.customElements = {
        all: {},
        define: (name, Element) => {
            window.customElements.all[name] = Element;
        }
    }
}
