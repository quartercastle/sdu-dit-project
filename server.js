const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());

let db = [{ id: 0, title: "Jens Hansen" },
          { id: 1, title: "Hanne Jensen" },
          { id: 2, title: "Will Williamson"}];


app.get('/api/posts', (req,res) => {
    res.send(db);
} 
);

app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`)
  });