const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

// import models for database
require('./models/post');
// import routes 

// server setup
app.use(cors());

// Parse middleware before handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

// Establish connection
mongoose
    .connect('mongodb://localhost:27017/blogdatabase', { useUnifiedTopology: true, useNewUrlParser: true  })
    .catch(e => {
        console.error('Connection error', e.message)
    })

// assign db connection to variable so we can check once open or error    
let db = mongoose.connection;

// once connection is open you'll get success messsage 
db.once('open', () => console.log('connected to the database'));

// You must make sure that you define all configurations BEFORE defining routes
require('./routes/postsRoute')(app);    

app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`)
  });