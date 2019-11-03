const express = require('express');

const app = express();
const PORT = 8000;

app.get('/', (req,res) => {
    res.send('Welcome to our fantastic blog!');
} 
);

app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`)
  });