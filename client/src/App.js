import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import postServices from './services/postServices';

export default class App extends Component{

  componentDidMount(){
    this.getProducts()
  }

  getProducts = async () => {
    let res = await postServices.create();
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
