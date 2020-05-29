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
      </div>
    );
  }
}

export default App;