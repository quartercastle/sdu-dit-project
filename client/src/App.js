import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BlogCreate from './Components/Blogs/BlogCreate/BlogCreate';
import BlogList from './Components/Blogs/BlogList/BlogList';
import Header from './Components/Header/Header'

export default class App extends Component{

render() {
  return (
    <div className="App">
      <Header />
      <BlogList />
      <BlogCreate />
    </div>
  );
}

}
