import Axios from "axios";
import uuid from "react-uuid";

const axios = Axios.create({
  baseURL: "http://localhost:8000"
});

var posts = [
  {
    id: uuid(),
    author: "Ulle",
    content: "This is some bullshit",
    date: new Date().toDateString()
  },
  {
    id: uuid(),
    author: "Morten",
    content: "Er ulle den klogeste person i verden? Det tror jeg nok lige",
    date: new Date().toDateString()
  }
];
const fetchPosts = async (page, pageSize) => {
  //var res = await axios.get("/api/posts?");
  return posts;
};
const fetchPost = async id => {
  //var res = await axios.get("/api/post/id");
  var post = posts.find(id);
  return post;
};

const createPost = async (author, content) => {
  //var res = await axios.post("/api/post/id");
  //e.preventDefault();
  posts.push({
    id: uuid(),
    author: author,
    content: content,
    date: new Date().toDateString()
  });
};

export { fetchPosts, fetchPost, createPost };
