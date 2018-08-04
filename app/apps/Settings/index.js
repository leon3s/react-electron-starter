import React from 'react';

import { ScrollView, Text } from 'react-native';

import {
  Row,
  View,
  Title,
  Container,
} from './style';

export default class Settings extends React.PureComponent {
  render() {
    return (
      <View>
        <Title>System settings</Title>
        <Container>
          <ScrollView
            className="scroll-bar"
            showsHorizontalScrollIndicator={false}
            style={{
          maxHeight: 500,
          width: '100%',
        }}
            contentContainerStyle={{
          marginTop: 20,
          width: '100%',
        }}
          >
            <Row>
              <Text>Shortcut</Text>
            </Row>
          </ScrollView>
        </Container>
      </View>
    );
  }
}
