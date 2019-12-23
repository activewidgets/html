
import adapter from '@activewidgets/frameworks/html';
import * as preact from 'preact';
import htm from 'htm';

export const {h, build, DOMTemplate} = adapter(preact);
export const html = htm.bind(h);
