import React, { Component } from "react";
import "./PostCreate.css";

export default class PostCreate extends Component {
  render() {
    return (
      <div className="postCreation_Content">
        <p>Here you can create a NEW post</p>
        <form>
          <div>
            <label>Author: </label>
            <input type="text" name="author" id="postAuthor"></input>
          </div>
          <div>
            <label>Post: </label>
            <textarea name="post" id="post"></textarea>
          </div>
          <input type="submit" value="Submit" id="submit"></input>
        </form>
      </div>
    );
  }
}
