import React, { Component } from 'react';
import Time from './Time.jsx'
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers.js';

const store = createStore(reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  state = {
    time: new Date().toLocaleTimeString()
  }
  componentDidMount() {
    setInterval(() => {
      store.dispatch({
          type: 'TIME_CHANGED',
          data: {
            time: new Date().toLocaleTimeString()
          }
        })
      // this.setState({
      //   time: new Date().toLocaleTimeString()
      // })
      }, 1000);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Provider store={store}>
          <Time time={this.state.time}/>
        </Provider>
      </div>
    );
  }
}

export default App;
