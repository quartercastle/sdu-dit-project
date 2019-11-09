//  /client/src/services/postServices.js

import axios from 'axios';

export default {
  getPosts: async () => {
    let res = await axios.get(`/api/post`);
    return res.data || [];
  },
  getPost: async (id) => {
    let res = await axios.get(`http://localhost:8000/api/post/${id}`);
    return res.data || [];
  },
  createPost: async (data) => {
    let res = await axios.post(`/api/post`, data);
    return res.data || [];
  },
  updatePost: async (id, data) => {
    let res = await axios.put(`http://localhost:8000/api/post/${id}`, data);
    return res.data || [];
  },
  deletePost: async (id) => {
    let res = await axios.delete(`/api/post/${id}`);
    return res.data || [];
  }
  
}