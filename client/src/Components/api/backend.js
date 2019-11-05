import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8000"
});

const fetchBlogPosts = async (page, pageSize) => {
  //var res = await axios.get("/api/posts?");

  const posts = [
    {
      id: "",
      author: "",
      title: "",
      description: "",
      content: ""
    },
    {
      id: "",
      author: "",
      title: "",
      description: "",
      content: ""
    }
  ];
};

const fetchBlogPost = async id => {
  //var res = await axios.get("/api/post/id");

  return {
    id: "",
    author: "",
    title: "",
    description: "",
    content: ""
  };
};

export { fetchBlogPosts, fetchBlogPost };
