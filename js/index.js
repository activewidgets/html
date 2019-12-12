
import adapter from '@activewidgets/frameworks/html';
import * as sources from '@activewidgets/grid/js';
import * as metadata from '@activewidgets/grid/metadata';
import * as preact from 'preact';

export const {build, tags, h, DOMTemplate} = adapter(preact);
export const {Grid, Row, View, Scrollbars} = build(sources, metadata);

