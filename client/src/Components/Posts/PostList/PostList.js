import React, { Component } from "react";
import "./PostList.css";
import PopUp from './Popup/Popup'

export default class PostList extends Component {
 
  render() {
    return (
      <div className="createPostPop">
        <PopUp />
      </div>
    );
  }
}
