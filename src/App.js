import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.store.userName}</h1>
      </div>
    );
  }
}

export default App;