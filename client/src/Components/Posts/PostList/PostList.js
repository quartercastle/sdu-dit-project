import React, { Component } from "react";
import "./PostList.css";
import PostCard from "../../Cards/PostCard";
import postServices from '../../../services/postServices';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    let res = await postServices.getPosts();

    this.setState({ posts: res });
  };

  renderContent = () => {
    if (this.state.isLoading) {
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
    if (this.state.posts.length > 0) {
      return (
        <div>
          <div className="postContainer">
            {this.state.posts.map(v => {
              return (
                <div key={v._id}>
                  <PostCard
                    key={v._id}
                    id={v._id}
                    date={new Date(v.createdAt).toDateString()}
                    author={v.author}
                    content={v.content}
                  ></PostCard>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else if(!this.state.posts) {
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
