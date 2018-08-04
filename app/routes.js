/**
 * @Author: Leone
 * @Date:   2018-02-01T16:11:20+01:00
 * @Last modified by:   Leone
 * @Last modified time: 2018-02-01T16:57:20+01:00
 */

import React from 'react';
import { Switch, Route } from 'react-router';
import { View, } from 'react-native';

import IndexPage from '@speech/pages/index';

export default () => (
  <View>
    <Switch>
      <Route path="/" component={IndexPage} />
    </Switch>
  </View>
);
