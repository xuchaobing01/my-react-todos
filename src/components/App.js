import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">欢迎来到react学习教程</h1>
        </header>
        <p className="App-intro">
          你可以在 <code>src/App.js</code> 文件中修改.
        </p>
        <p className="App-intro">
          <code><Link to="/Todos" >Todos</Link></code>
        </p>
      </div>
    );
  }
}

export default App;
