import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component{

  componentDidMount(){
  }

  
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to our lovely blog! 
        </h1>
      </header>
    </div>
  );
}

}
