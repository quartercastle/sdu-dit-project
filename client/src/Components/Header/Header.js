import React, {Component} from 'react';
import './Header.css';
export default class Header extends Component{

render() {
  return (
        <div className="headerContainer">
            <h1>
                Welcome to our awesome blog page !
            </h1>
            <p>
                Here yo have two chooses: 
            </p>
            <div className="headerButtonContainer">
                <a href='#'><button>All blog posts</button></a>
                <a href='#'><button>Make new blog post</button></a>
            </div>
        </div>
        );
    }
}