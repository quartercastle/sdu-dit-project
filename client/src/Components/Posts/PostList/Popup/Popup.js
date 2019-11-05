import React, { Component } from "react";
import Popup from "reactjs-popup";
import { createPost } from "../../../api/backend";
import "./Popup.css";

export default class Pupup extends Component {
 
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
handleSubmit = () => {
    var result = createPost(this.state.author, this.state.post);
}
  render() {
    return (
      <div className="createPostPop">
        <Popup trigger={<button> Create new post</button>} modal>
        {close => (
        <div>
          <div>
            <label>Author: </label>
            <input type="text" onChange={this.onAuthorInput} value={this.state.author} name="author" id="postAuthor"></input>
          </div>
          <div>
            <label>Post: </label>
            <textarea onChange={this.onPostInput} value={this.state.post} name="post" id="post"></textarea>
          </div>
            <button type="submit" onClick={this.handleSubmit} value="Submit" id="submit">Post</button>
        </div>
    )}
      </Popup>
      </div>
    );
  }
}