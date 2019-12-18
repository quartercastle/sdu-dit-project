import React, { Component } from "react";
import "./PostList.css";
import PostCard from "../../Cards/PostCard";
import postServices from "../../../services/postServices";
import { gql } from "apollo-boost";
import { graphql, compose } from "react-apollo";
import { getPostsQuery } from "../../../api/GraphQueries";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false
    };
  }

  renderContent = () => {
    if (this.props.data.loading) {
      return (
        <div className="spinnerContainer">
          <div className="loader"></div>
          <div>Loading...</div>
        </div>
      );
    } else {
      return this.renderList();
    }
  };

  renderList = () => {
    if (this.props.data.posts.length > 0) {
      console.log(this.props);
      return (
        <div>
          <div className="postContainer">
            {this.props.data.posts.map(v => {
              return (
                <div key={v.id}>
                  <PostCard
                    key={v.id}
                    id={v.id}
                    date={new Date(Number(v.createdAt)).toDateString()}
                    author={v.author}
                    content={v.content}
                    votes={v.vote}
                    commentCount={v.commentCount}
                  ></PostCard>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else if (!this.state.posts) {
      return (
        <div className="spinnerContainer">
          <img className="failedImg" alt="failed" src="/SWW.jpeg"></img>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default graphql(getPostsQuery)(PostList);
