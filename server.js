const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());

mongoose
    .connect('mongodb://localhost:27017/blogdatabase', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get('/api/posts', (req,res) => {
    res.send('test');
} 
);

app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`)
  });