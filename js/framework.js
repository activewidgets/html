/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import adapter from '@activewidgets/frameworks/html';
import * as preact from 'preact';
import htm from 'htm';

export const {h, build} = adapter(preact);
export const tpl = htm.bind(h);
