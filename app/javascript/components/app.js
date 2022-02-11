import React from 'react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Main from './Main';
import './styles/app.css'

function App() {
  return (
    <div className="App">
        <Main />
    </div>
  );
}

export default App;