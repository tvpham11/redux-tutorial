import React, { Component } from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Form from './Form';
import List from './List';

import reducers from './reducers';

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" width="50"/>
            <Form />
            <List />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;