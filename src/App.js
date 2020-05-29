import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import MainPageLayout from './components/MainPage/MainPageLayout';

@observer
class App extends Component {
  componentDidMount() {
    this.props.store.getUser()
  }

  render() {
    return (
      <div className="App">
        <MainPageLayout />
        {/* <h1>{this.props.store.user}</h1> */}
      </div>
    );
  }
}

export default App;