import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./PostList.css";
import PostCard from "../../Cards/PostCard";
import { fetchPosts } from "../../api/backend";
import {
  faChevronUp,
  faChevronDown,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";

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
    var res = await fetchPosts();

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
    console.log(this.state.posts);
    if (this.state.posts.length > 0) {
      return (
        <div className="postContainer">
          {this.state.posts.map(v => {
            return (
              <PostCard
                key={v.id}
                id={v.id}
                date={v.date}
                author={v.author}
                content={v.content}
              ></PostCard>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="spinnerContainer">
          <img className="failedImg" src="/SWW.jpeg"></img>
        </div>
      );
    }
  };

  render() {
    const { posts } = this.state;
    return <div>{this.renderContent()}</div>;
  }
}
