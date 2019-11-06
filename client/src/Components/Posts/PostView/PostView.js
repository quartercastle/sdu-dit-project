import React from "react";
import { fetchPost, fetchPosts } from "../../api/backend";
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
      isLoading: true
    };
  }

  componentWillMount() {
    this.fetchPost();
  }

  fetchPost = async () => {
    console.log("fetching post with id: " + this.props.match.params.id);
    var res = await fetchPosts(this.props.match.params.id);
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
              <TextField label="Author"></TextField>
            </div>
            <div className="commentInput">
              <TextField label="Comment"></TextField>
            </div>
            <Button className="submitButton" variant="contained">
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
