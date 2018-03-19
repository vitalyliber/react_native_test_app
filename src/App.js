import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import Dashboard from './screens/Dashboard';

import store from './store';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}
