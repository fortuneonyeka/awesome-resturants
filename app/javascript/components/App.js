import React from 'react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Main from './Main';
import './app.css'

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