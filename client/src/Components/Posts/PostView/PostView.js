import React, { Component } from "react";
import postServices from "../../../services/postServices";
import PostCard from "../../Cards/PostCard";
import "./postView.css";
import CommentCard from "../../Cards/CommentCard";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core/";

import { getPostQuery, createComment } from "../../../api/GraphQueries";
import { graphql, compose } from "react-apollo";

class PostView extends Component {
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
      this.props.createComment({
        variables: {
          toId: this.props.match.params.id,
          author: this.state.author,
          comment: this.state.comment
        },
        refetchQueries: [
          {
            query: getPostQuery,
            variables: { id: this.props.match.params.id }
          }
        ]
      });
      this.setState({ comment: "", author: "" });
    }
  };

  fetchComments = async () => {
    let res = await postServices.getPost(this.props.match.params.id);

    this.setState({ comments: res.comments });
  };

  renderCommentList = () => {
    console.log(this.props.data);
    if (this.props.data.post) {
      if (this.props.data.post.comments.length > 0) {
        return (
          <div>
            <div className="commentContainer">
              {this.props.data.post.comments.map(c => {
                return (
                  <div key={c.id}>
                    <CommentCard
                      key={c.id}
                      id={c.id}
                      votes={c.vote}
                      date={new Date(Number(c.createdAt)).toDateString()}
                      author={c.author}
                      comment={c.comment}
                      post={this.state.post}
                      parentId={this.props.data.post.id}
                    ></CommentCard>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
    }
  };

  renderPost = () => {
    if (this.props.data.post) {
      console.log(this.props);
      return (
        <PostCard
          date={new Date(Number(this.props.data.post.createdAt)).toDateString()}
          id={this.props.data.post.id}
          author={this.props.data.post.author}
          content={this.props.data.post.content}
          votes={this.props.data.post.vote}
          commentCount={this.props.data.post.commentCount}
        ></PostCard>
      );
    } else {
      return <div>Loading...</div>;
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
          <div className="titleBox">Comments</div>
          {this.renderCommentList()}
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(getPostQuery, {
    options: props => {
      return {
        variables: {
          id: props.match.params.id
        }
      };
    }
  }),
  graphql(createComment, { name: "createComment" })
)(PostView);
