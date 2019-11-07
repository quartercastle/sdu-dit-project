import React from "react";
import {
  fetchPost,
  fetchPosts,
  createComment,
  fetchComments
} from "../../api/backend";
import PostCard from "../../Cards/PostCard";
import CommentCard from "../../Cards/CommentCard";
import style from "./postView.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core/";
import { thisExpression } from "@babel/types";

export default class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      post: null,
      isLoading: true,
      author: "",
      comment: ""
    };
  }

  componentWillMount() {
    this.fetchPost();
    this.fetchComments();
  }

  fetchPost = async () => {
    var res = await fetchPost(this.props.match.params.id);
    this.setState({ post: res });
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
      this.setState({ author: "", comment: "" });
    }
  };

  fetchComments = async () => {
    var result = await fetchComments();
    this.setState({ comments: result });
  };
  renderCommentList = () => {
    if (this.state.comments.length > 0) {
      return (
        <div>
          <div className="commentContainer">
            {this.state.comments.map(c => {
              return (
                <div key={c.id}>
                  <CommentCard
                    key={c.id}
                    id={c.id}
                    date={c.date}
                    author={c.author}
                    comment={c.comment}
                  ></CommentCard>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };

  renderPost = () => {
    if (this.state.post) {
      return (
        <PostCard
          date={this.state.post.date}
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
                value={this.state.comment}
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
