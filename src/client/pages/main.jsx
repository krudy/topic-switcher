'use strict';

import React from 'react';
import ReactDom from 'react-dom';

// Main App Component
import MainApp from '../modules/main/components/MainApp';

import './_common';
import './_common_assets';

ReactDom.render(
  <div>
    <MainApp />
  </div>,
  document.getElementById('content')
);
