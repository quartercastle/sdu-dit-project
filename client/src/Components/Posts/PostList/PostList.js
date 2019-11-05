import React, { Component } from "react";
import "./PostList.css";

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(list => this.setState({ list }));
  };
  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <h1>Welcome to our lovely blog!</h1>
      </div>
    );
  }
}
