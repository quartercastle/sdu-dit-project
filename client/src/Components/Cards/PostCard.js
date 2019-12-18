import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";
import { upvote, downvote } from "../../api/backend";
import "./postCard.css";

import { graphql, compose } from "react-apollo";
import { getPostsQuery, votePost } from "../../api/GraphQueries";

class PostCard extends React.Component {
  constructor(props) {
    super(props);
  }

  onUpvote = async () => {
    console.log(this.props);
    await this.props.votePost({
      variables: {
        id: this.props.id,
        shouldUpvote: true
      },
      refetchQueries: [{ query: getPostsQuery }]
    });
  };

  onDownvote = async () => {
    this.props.votePost({
      variables: {
        id: this.props.id,
        shouldUpvote: false
      },
      refetchQueries: [{ query: getPostsQuery }]
    });
  };

  render() {
    return (
      <div>
        <div className="cardContainer">
          <div className="flexBox">
            <div className="cardContent">
              <Link
                className="cardLink"
                key={this.props.id}
                to={`/post/${this.props.id}`}
              >
                <div className="postTitle">
                  Posted by {this.props.author} - {this.props.date}
                </div>
              </Link>
              <div className="postDescription">{this.props.content}</div>
              <Link
                className="cardLink"
                key={"comment_" + this.props.id}
                to={`/post/${this.props.id}`}
              >
                <div className="cardFooter">
                  {this.props.commentCount}
                  <div className="awesomeIcon">
                    <FontAwesomeIcon icon={faCommentAlt}></FontAwesomeIcon>
                  </div>
                  Comments
                </div>
              </Link>
            </div>
            <div className="upvoteDownVote">
              <div className="cardButton">
                <FontAwesomeIcon
                  onClick={() => this.onUpvote()}
                  icon={faChevronUp}
                  style={{ marginBottom: "10px" }}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  onClick={() => this.onDownvote()}
                  icon={faChevronDown}
                ></FontAwesomeIcon>
              </div>
              {this.props.votes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(graphql(votePost, { name: "votePost" }))(PostCard);
