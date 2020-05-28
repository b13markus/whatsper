import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { observer } from 'mobx-react';
import appStore from './store/appStore';

@observer class App extends Component() {
  render() {
    return (
      <div className="App">
        <h1>{this.props.store.userName}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App store={appStore}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
