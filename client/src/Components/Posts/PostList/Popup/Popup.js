import React, { Component } from "react";
import Popup from "reactjs-popup";
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
  render() {
    return (
      <div className="createPostPop">
        <Popup trigger={<button> Create new post</button>} modal>
        {close => (
        <form>
          <div>
            <label>Author: </label>
            <input type="text" onChange={this.onAuthorInput} value={this.state.author} name="author" id="postAuthor"></input>
          </div>
          <div>
            <label>Post: </label>
            <textarea onChange={this.onPostInput} value={this.state.post} name="post" id="post"></textarea>
          </div>
            <input type="submit" value="Submit" id="submit"></input>
        </form>
    )}
      </Popup>
      </div>
    );
  }
}