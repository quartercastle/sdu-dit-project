import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";
import { upvote, downvote } from "../api/backend";

import style from "./postCard.css";

const PostCard = props => {
  const onUpvote = async () => {
    await upvote(props.id);
  };

  const onDownvote = async () => {
    await downvote(props.id);
  };

  return (
    <div>
      <div className="cardContainer">
        <div className="flexBox">
          <div className="cardContent">
            <Link className="cardLink" key={props.id} to={`/post/${props.id}`}>
              <div className="postTitle">
                Posted by {props.author} - {props.date}
              </div>
            </Link>
            <div className="postDescription">{props.content}</div>
            <Link className="cardLink" key={props.id} to={`/post/${props.id}`}>
              <div className="cardFooter">
                0
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
                onClick={() => onUpvote()}
                icon={faChevronUp}
                style={{ marginBottom: "10px" }}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                onClick={() => onDownvote()}
                icon={faChevronDown}
              ></FontAwesomeIcon>
            </div>
            {props.votes}0
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
