import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Home extends React.Component {
  state = {}

  render() {
    return (
      <View>
        <Text>Starter</Text>
      </View>
    );
  }
}

export default connect(() => ({
}), () => ({
}))(Home);
