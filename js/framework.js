/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import adapter from '@activewidgets/frameworks/html';
import {Component, cloneElement, createElement, isValidElement, createContext, render} from 'preact';
import htm from 'htm';

export const {h, build} = adapter({Component, cloneElement, createElement, isValidElement, createContext, render});
export const tpl = htm.bind(h);
