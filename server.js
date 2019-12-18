const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 4000;

// allow cors(cross- origin)
app.use(cors());

mongoose
  .connect(
    `mongodb://${process.env.DB_HOST || "localhost"}:27017/blogdatabase`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  .catch(e => {
    console.error("Connection error", e.message);
  });
mongoose.connection.once("open", () => {
  console.log("mongoose succesfully conected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`GraphQL is running on port ${PORT}`));
