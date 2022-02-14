import React from 'react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Main from './Main';
import './styles/app.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
    </div>
    </Provider>
    
  );
}

export default App;