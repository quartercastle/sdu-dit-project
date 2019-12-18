const graphql = require("graphql");
const _ = require("lodash");
const Post = require("../models/post");
const Comment = require("../models/comment");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull
} = graphql;

// dummy data

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLID },
    author: { type: GraphQLString },
    content: { type: GraphQLString },
    vote: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find({ toId: parent.id });
      }
    },
    commentCount: { type: GraphQLInt }
  })
});

const CommentType = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    id: { type: GraphQLID },
    toId: { type: GraphQLID },
    author: { type: GraphQLString },
    comment: { type: GraphQLString },
    vote: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other source
        return Post.findById(args.id);
      }
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find();
      }
    },
    comment: {
      type: CommentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // Code to get data from db / other source
        return Comment.findById(args.id);
      }
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPost: {
      type: PostType,
      args: {
        author: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let post = new Post({
          author: args.author,
          content: args.content,
          vote: 0,
          commentCount: 0
        });
        return post.save();
      }
    },
    votePost: {
      type: PostType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        shouldUpvote: { type: new GraphQLNonNull(GraphQLBoolean) }
      },
      resolve(parent, args) {
        return Post.findOneAndUpdate(
          { _id: args.id },
          { $inc: { vote: args.shouldUpvote ? 1 : -1 } }
        );
      }
    },
    voteComment: {
      type: CommentType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        shouldUpvote: { type: new GraphQLNonNull(GraphQLBoolean) }
      },
      resolve(parent, args) {
        return Comment.findOneAndUpdate(
          { _id: args.id },
          { $inc: { vote: args.shouldUpvote ? 1 : -1 } }
        );
      }
    },
    addComment: {
      type: CommentType,
      args: {
        toId: { type: new GraphQLNonNull(GraphQLID) },
        author: { type: new GraphQLNonNull(GraphQLString) },
        comment: { type: new GraphQLNonNull(GraphQLString) }
      },
      async resolve(parent, args) {
        let comment = new Comment({
          toId: args.toId,
          author: args.author,
          comment: args.comment,
          vote: 0
        });

        await Post.findOneAndUpdate(
          { _id: args.toId },
          { $inc: { commentCount: 1 } }
        );
        return comment.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
