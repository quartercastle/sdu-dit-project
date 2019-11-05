import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8000"
});

const fetchPosts = async (page, pageSize) => {
  //var res = await axios.get("/api/posts?");

  return [
    {
      id: "1",
      author: "Ulle",
      content: "Er Morten den højeste person i verden?"
    },
    {
      id: "2",
      author: "Morten",
      content: "Er ulle den klogeste person i verden? Det tror jeg nok lige"
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
