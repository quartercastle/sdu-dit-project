const mongoose = require('mongoose');
const Post = mongoose.model('posts');

module.exports = (app) => {

  app.get(`/api/post`, async (req, res) => {
    let posts = await Post.find();
    return res.status(200).send(posts);
  });

  app.post(`/api/post`, async (req, res) => {
    let post = await Post.create(req.body);
    return res.status(201).send({
      error: false,
      post
    })
  })

  app.put(`/api/post/:id`, async (req, res) => {
    const {id} = req.params;

    let post = await Post.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      post
    })

  });

  app.delete(`/api/post/:id`, async (req, res) => {
    const {id} = req.params;

    let post = await Post.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      post
    })

  })

}