import React, { Component } from "react";
import Popup from "reactjs-popup";
import { createPost, fetchPosts } from "../../../api/backend";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Popup.css";

export default class Pupup extends Component {
  constructor(props) {
    super(props);
    this.state = { author: "", post: "" };
  }
  onAuthorInput = event => {
    this.setState({ author: event.target.value });
  };
  onPostInput = event => {
    this.setState({ post: event.target.value });
  };
  handleSubmit = () => {
    var result = createPost(this.state.author, this.state.post);
  };
  render() {
    return (
      <div className="createPostPop">
        <Popup
          trigger={<Button variant="contained"> Create new post</Button>}
          modal
        >
          {close => (
            <div className="popWindow">
              <div>
                <TextField
                  type="text"
                  label="Title"
                  onChange={this.onAuthorInput}
                  value={this.state.author}
                  name="author"
                  id="postAuthor"
                ></TextField>
              </div>
              <div>
                <TextField
                  id="standard-multiline-flexible"
                  label="Post"
                  multiline
                  rowsMax="4"
                  value={this.state.post}
                  onChange={this.onPostInput}
                  margin="normal"
                />
              </div>
              <div className="postBtnContainer">
                <Button
                  variant="contained"
                  id="postBtn"
                  onClick={this.handleSubmit}
                  value="Submit"
                >
                  Post
                </Button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  }
}
