import React from 'react';
import { View, Text, TextInput } from 'react-native';

import MoviePlayer from '@speech/components/MoviePlayer';

export default class Multimedia extends React.PureComponent {
  search = (text) => {
    console.log(text);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: 20,
      }}
      >
        <View style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 60,
        }}
        >
          <Text style={{
            height: 60,
            color: 'white',
            fontSize: 36,
            fontWeight: 'bold',
            marginTop: 6,
            marginRight: 20,
          }}
          >
            Youtube
          </Text>
          <TextInput
            onChangeText={this.search}
            placeholder="Search"
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: 20,
              color: 'white',
              maxHeight: 60,
              height: 60,
            }}
          />
        </View>
        {/* <MoviePlayer /> */}
      </View>
    );
  }
}
