import React from 'react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;