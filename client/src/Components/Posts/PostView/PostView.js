import React from "react";
import { fetchPost, fetchPosts, createComment } from "../../api/backend";
import PostCard from "../../Cards/PostCard";
import CommentCard from "../../Cards/CommentCard";
import style from "./postView.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core/";

export default class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      isLoading: true,
      author:'',
      comment:''
    };
  }

  componentWillMount() {
    this.fetchPost();
  }

  fetchPost = async () => {
    console.log("fetching post with id: " + this.props.match.params.id);
    var res = await fetchPosts(this.props.match.params.id);
  };

  onAuthorInput = event => {
    this.setState({ author: event.target.value });
  };
  onPostInput = event => {
    this.setState({ comment: event.target.value });
  };

  onCreateComment = async () => {
    if (this.state.author.length < 1 || this.state.comment.length < 1) {
      console.log("error msg");
    } else {
      await createComment(this.state.author, this.state.comment);
      console.log(this.state)
    }
  };

  renderCommentList = () => {
    return (
      <div className="commentListContainer">
        <CommentCard></CommentCard>
        <CommentCard></CommentCard>
        <CommentCard></CommentCard>
      </div>
    );
  };

  render() {
    return (
      <div className="postViewContainer">
        <PostCard></PostCard>
        <div className="commentsSectionTitle">
          <div className="commentFlexBox">
            <div className="commentInput">
            <TextField
              className="contentInput"
              label="Author"
              onChange={event => this.onAuthorInput(event)}
              value={this.state.author}
            ></TextField>
            </div>
            <div className="commentInput">
            <TextField
              className="contentInput"
              multiline
              onChange={event => this.onPostInput(event)}
              label="Comment"
              value={this.state.post}
            ></TextField>
            </div>
            <Button onClick={this.onCreateComment} variant="contained">
              Comment
            </Button>
          </div>
          Comments
          {this.renderCommentList()}
        </div>
      </div>
    );
  }
}
