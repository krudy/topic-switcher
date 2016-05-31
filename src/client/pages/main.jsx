'use strict';

import React from 'react';
import ReactDom from 'react-dom';

// Flux
import reactor from '../../../core/modules/main/reactor';
import MainStore from '../../../core/modules/main/stores/MainStore';

// Main App Component
import MainApp from '../modules/main/components/MainApp';

import './_common';
import './_common_assets';

// Register all the stores
reactor.registerStores({
  mainStore: MainStore,
});

ReactDom.render(
  <div>
    <MainApp />
  </div>,
  document.getElementById('content')
);
