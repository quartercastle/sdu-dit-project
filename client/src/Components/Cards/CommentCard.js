import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";
import "./commentCard.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import postServices from "../../services/postServices";

import { graphql, compose } from "react-apollo";
import { voteComment, getPostQuery } from "../../api/GraphQueries";

class CommentCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
      comments: []
    };

    this.dialogRef = React.createRef();
  }

  upvote = async () => {
    await this.props.voteComment({
      variables: {
        id: this.props.id,
        shouldUpvote: true
      },
      refetchQueries: [
        {
          query: getPostQuery,
          variables: { id: this.props.parentId }
        }
      ]
    });
    /*let data = this.props.post;
    let newData = data.comments.find(comment => comment._id === this.props.id);
    newData.vote++;
    await postServices.updatePost(this.props.post._id, data);*/
  };

  downvote = async () => {
    await this.props.voteComment({
      variables: {
        id: this.props.id,
        shouldUpvote: false
      },
      refetchQueries: [
        {
          query: getPostQuery,
          variables: { id: this.props.parentId }
        }
      ]
    });
  };

  reply = () => {
    this.setState({ dialogOpen: !this.state.dialogOpen });

    if (this.state.dialogOpen) {
      this.dialogRef.current.style.display = "flex";
    } else {
      this.dialogRef.current.style.display = "none";
    }
  };

  render() {
    return (
      <div className="commentContext">
        <div className="commentCardContainer">
          <div>
            <div className="commentTitle">
              Posted by {this.props.author} - {this.props.date}{" "}
            </div>
            <div className="commentDescription">{this.props.comment}</div>
          </div>
          <div className="upvoteDownVote">
            <div className="cardButton">
              <FontAwesomeIcon
                onClick={() => this.upvote()}
                icon={faChevronUp}
                style={{ marginBottom: "10px" }}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                onClick={() => this.downvote()}
                icon={faChevronDown}
              ></FontAwesomeIcon>
            </div>
            {this.props.votes}
          </div>
        </div>
        <div onClick={() => this.reply()} className="commentFooter">
          <div className="awesomeIcon">
            <FontAwesomeIcon icon={faCommentAlt}></FontAwesomeIcon>
          </div>
          Reply
        </div>
        <div ref={this.dialogRef} className="dialog">
          <div className="commentInput">
            <TextField id="standard-basic" label="Author" margin="normal" />
          </div>
          <div className="commentInput">
            <TextField id="standard-basic" label="Reply" margin="normal" />
          </div>
          <Button className="submitButton" variant="contained">
            Submit
          </Button>
        </div>
        <div className="subComments">{this.props.children}</div>
      </div>
    );
  }
}

export default compose(graphql(voteComment, { name: "voteComment" }))(
  CommentCard
);
