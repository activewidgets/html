
import adapter from '@activewidgets/frameworks/html';
import * as sources from '@activewidgets/datagrid/js';
import * as metadata from '@activewidgets/datagrid/metadata';
import * as preact from 'preact';

export const {build, tags, h, DOMTemplate} = adapter(preact);
export const {Datagrid, Row, Gridview, Scrollbars} = build(sources, metadata);

