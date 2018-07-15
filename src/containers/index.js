import React from 'react';
import { View } from 'react-native';
import MainNavigator from './AppNavigator';

class Container extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    );
  }
}

export default Container;
