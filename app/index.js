/**
 * @Author: Leone
 * @Date:   2018-02-01T16:11:20+01:00
 * @Last modified by:   Leone
 * @Last modified time: 2018-02-01T16:58:24+01:00
 */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from '@speech/Root';
import { configureStore, history } from '@speech/store/configureStore';
import '@speech/styles/app.global.css';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
