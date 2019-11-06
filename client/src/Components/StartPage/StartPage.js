import React, {Component} from 'react';
import './StartPage.css';
import {Link} from 'react-router-dom';
export default class StartPage extends Component{

render() {
  return (
        <div className="SPContainer">
            <h1>
                Welcome to our awesome blog page !
            </h1>
            <p>
                Here yo have two chooses: 
            </p>
            <div className="SPButtonContainer">
            <button><Link to='/PostList'>View all posts</Link></button>
            <button><Link to='/PostCreate'>Create new post</Link></button>
            </div>
        </div>
        );
    }
}