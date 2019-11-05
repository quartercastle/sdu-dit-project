import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8000"
});

const fetchPosts = async (page, pageSize) => {
  //var res = await axios.get("/api/posts?");

  return [
    {
      id: "",
      author: "Ulle",
      content: ""
    },
    {
      id: "",
      author: "Morten",
      content: ""
    }
  ];
};

const fetchPost = async id => {
  //var res = await axios.get("/api/post/id");

  return {
    id: "",
    author: "",
    content: ""
  };
};

export { fetchPosts, fetchPost };
