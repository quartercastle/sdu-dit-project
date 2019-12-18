import { gql } from "apollo-boost";
import { graphql, compose } from "react-apollo";

// posts query
const getPostsQuery = gql`
  {
    posts {
      id
      author
      content
      vote
      createdAt
      commentCount
    }
  }
`;

const getPostQuery = gql`
  query($id: ID!) {
    post(id: $id) {
      id
      author
      content
      vote
      createdAt
      comments {
        id
        author
        vote
        createdAt
        comment
      }
      commentCount
    }
  }
`;

const createPost = gql`
  mutation($author: String!, $content: String!) {
    addPost(author: $author, content: $content) {
      id
    }
  }
`;

const votePost = gql`
  mutation($id: ID!, $shouldUpvote: Boolean!) {
    votePost(id: $id, shouldUpvote: $shouldUpvote) {
      id
    }
  }
`;

const createComment = gql`
  mutation($toId: ID!, $author: String!, $comment: String!) {
    addComment(toId: $toId, author: $author, comment: $comment) {
      id
    }
  }
`;

const voteComment = gql`
  mutation($id: ID!, $shouldUpvote: Boolean!) {
    voteComment(id: $id, shouldUpvote: $shouldUpvote) {
      id
    }
  }
`;

export {
  getPostsQuery,
  votePost,
  createPost,
  getPostQuery,
  createComment,
  voteComment
};
