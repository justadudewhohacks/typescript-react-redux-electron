import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Root from './Root';

ReactDOM.render(
  (
    <Provider store={store}>
      <Root />
    </Provider>
  ),
  document.getElementById('root')
);

if (module['hot']) {
  module['hot'].accept('./Root', () => {
    const HotRoot = require('./Root').default
    ReactDOM.render(
      (
        <Provider store={store}>
          <HotRoot />
        </Provider>
      ),
      document.getElementById('root')
    )
  })
}
