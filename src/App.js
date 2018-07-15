import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { YellowBox } from 'react-native';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Container from './containers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
