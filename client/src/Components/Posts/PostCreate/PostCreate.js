import React, { Component } from "react";
import "./PostCreate.css";

export default class PostCreate extends Component {

  constructor(props){
    super(props);
    this.state = {author:'', post:''}

 } 
onAuthorInput = (event) => {
  this.setState({author: event.target.value});
}
onPostInput = (event) => {
  this.setState({post: event.target.value});
}

  render() {
    return (
      <div className="postCreation_Content">
        <p>Here you can create a NEW post</p>
        <div>
          <div>
            <label>Author: </label>
            <input type="text" onChange={this.onAuthorInput} value={this.state.author} name="author" id="postAuthor"></input>
          </div>
          <div>
            <label>Post: </label>
            <textarea onChange={this.onPostInput} value={this.state.post} name="post" id="post"></textarea>
          </div>
          <input type="submit" value="Submit" id="submit"></input>
        </div>
      </div>
    );
  }
}
