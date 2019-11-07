import React, {Component} from 'react';
import './StartPage.css';
import {Link} from 'react-router-dom';
export default class StartPage extends Component{

render() {
  return (
        <div className="SPContainer">
            <h1>
                Welcome to our awesome post page !
            </h1>
            <p>
                Here you have two chooses: 
            </p>
            <div className="SPButtonContainer">
                <Link to='/PostList'><button>View all posts</button></Link>
                <Link to='/PostCreate'><button>Create new post</button></Link>
            </div>
        </div>
        );
    }
}