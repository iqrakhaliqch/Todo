import React from 'react';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import Todo from './src/Todo';

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

export default App;