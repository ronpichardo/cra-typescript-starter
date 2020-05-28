import 'core-js';
import 'regenerator-runtime/runtime';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import Banner from './components/Banner/Banner';
import './styles/global.scss';

ReactDom.render(
  <div>
    <Banner name="World" />
  </div>,
  document.getElementById('app'),
)