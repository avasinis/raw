import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

import Demo from './cmpts/stepDemo';
import Test from './cmpts/test';

Amplify.configure(aws_exports);


class App extends Component {
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <Test></Test>
        </p>
        <Demo></Demo>
      </div>
    );
  }
}

export default App;
