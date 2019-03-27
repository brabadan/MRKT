import * as React from 'react';
import * as ReactDom from 'react-dom';
import { App } from './app';

const div = document.createElement('div');
document.body.appendChild(div);

ReactDom.render(<App />, div);
