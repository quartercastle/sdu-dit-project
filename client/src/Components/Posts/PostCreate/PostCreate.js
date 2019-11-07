import React, { Component } from "react";
import "./PostCreate.css";
import { createPost } from "../../api/backend";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class PostCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { author: "", post: "", errorMsg: "", isSuccesfull: true };
  }
  onAuthorInput = event => {
    this.setState({ author: event.target.value });
  };
  onPostInput = event => {
    this.setState({ post: event.target.value });
  };

  onCreatePost = async () => {
    if (this.state.author.length < 1 || this.state.post.length < 1) {
      console.log("error msg");
    } else {
      await createPost(this.state.author, this.state.post);
      this.setState({ author: "", post: "" });
    }
  };

  render() {
    return (
      <div className="postContext">
        <div className="postCreateContainer">
          <div className="postCreateTitle">Write your post here!</div>
          <div className="contentInputContainer">
            <TextField
              className="contentInput"
              label="Author"
              onChange={event => this.onAuthorInput(event)}
              value={this.state.author}
            ></TextField>
          </div>
          <div className="contentInputContainer">
            <TextField
              className="contentInput"
              multiline
              onChange={event => this.onPostInput(event)}
              label="Subject"
              value={this.state.post}
            ></TextField>
          </div>

          <Button onClick={this.onCreatePost} variant="contained">
            Create Post
          </Button>
        </div>
      </div>
    );
  }
}
