
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Sports from './components/Sports'

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is App file</h1>
        <p> This is the sports file
          <Sports 
          team = "Red Sox"
          sport = "Baseball"/>
            <Sports 
          team = "Patriots"
          sport = "Football"/>
        </p>
      </header>
    </div>
    )
  }
}
