import React from 'react';
import { Provider } from 'react-redux';

import App from './app/App';
import store from './app/configureStore';

export default function App() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}