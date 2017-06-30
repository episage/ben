import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import rootStore from './rootStore';
import App from 'App';

const store = rootStore();

export default function () {
  ReactDOM.render(
    <StoreProvider store={store}>
      <App />
    </StoreProvider>,
    document.getElementById('app')
  );
}

if (module.hot) {
  module.hot.accept('App', () => {
    const NextApp = require('App').default;
    ReactDOM.render(
      <StoreProvider store={store}>
        <NextApp />
      </StoreProvider>,
      document.getElementById('app')
    );
  });
}
