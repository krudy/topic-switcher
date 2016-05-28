'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import MainApp from '../modules/main/components/MainApp';

ReactDom.render(
  <div>
    <MainApp />
  </div>,
  document.getElementById('content')
);
