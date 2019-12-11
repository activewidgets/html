
import framework from '@activewidgets/frameworks/html';
import * as pkg from '@activewidgets/grid/js';
import * as metadata from '@activewidgets/grid/metadata';
import * as preact from 'preact';

const {build, tags, h} = framework(preact);

export const {Grid, Row, View, Scrollbars} = build(pkg, metadata);
export {tags, h};

