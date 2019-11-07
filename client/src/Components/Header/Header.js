import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import "./Header.css";

import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import {faStream} from '@fortawesome/free-solid-svg-icons';


export default class Header extends Component {
  render() {
    return (
        <div>
            <div className="navbar">
                <div>
                    <Link to='/StartPage'><FontAwesomeIcon icon={faHome} size="sm" />Home</Link>
                    <Link to='/PostCreate'><FontAwesomeIcon icon={faPen} size="sm" />Create post</Link>
                    <Link to='/PostList'><FontAwesomeIcon icon={faStream} size="sm" />All posts</Link>
                </div>
            </div>

        </div>
    );
  }
}