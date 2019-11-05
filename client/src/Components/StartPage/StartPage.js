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
                <Link to='/PostList'><button>All blog posts</button></Link>
                <Link to='/PostCreate'><button>Make new blog post</button></Link>
            </div>
        </div>
        );
    }
}