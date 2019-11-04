import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BlogCreate from './Components/Blogs/BlogCreate/BlogCreate';
import BlogList from './Components/Blogs/BlogList/BlogList';

export default class App extends Component{

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to our lovely blog! 
        </h1>
      </header>
      <BlogList>
        
      </BlogList>
      <BlogCreate>
      </BlogCreate>
    </div>
  );
}

}
