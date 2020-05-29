import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import Chat from './components/Chat/App/index'
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
        <Chat/>
      </div>
    );
  }
}

export default App;