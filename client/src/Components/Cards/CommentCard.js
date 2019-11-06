import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";

import style from "./commentCard.css";
import { tsThisType } from "@babel/types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class CommentCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false
    };

    this.dialogRef = React.createRef();
  }

  upvote = () => {
    console.log("upvote");
  };

  downvote = () => {
    console.log("downvote");
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
            <div className="commentTitle">Posted by Morten - 3apr, 2017 </div>
            <div className="commentDescription">Total inteligent kommentar</div>
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
            {this.props.votes}0
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

export default CommentCard;
