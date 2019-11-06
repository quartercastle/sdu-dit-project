import React from "react";
import { fetchPost } from "../../api/backend";
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
    var res = await fetchPost(this.props.match.params.id);
    this.setState({ post: res });
    console.log(res);
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

  renderPost = () => {
    if (this.state.post) {
      console.log(this.state.post);
      return (
        <PostCard
          id={this.state.post.id}
          author={this.state.post.author}
          content={this.state.post.content}
        ></PostCard>
      );
    } else {
      return <div></div>;
    }
  };

  render() {
    return (
      <div className="postViewContainer">
        {this.renderPost()}
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
