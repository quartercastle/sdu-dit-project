import React from "react";
import { fetchPost, fetchPosts } from "../../api/backend";

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

  render() {
    return <div>{this.props.id}</div>;
  }
}
