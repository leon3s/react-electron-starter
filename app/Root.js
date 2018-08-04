/**
 * @Author: Leone
 * @Date:   2018-02-01T16:11:20+01:00
 * @Last modified by:   Leone
 * @Last modified time: 2018-02-01T16:55:51+01:00
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import Routes from './routes';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}
