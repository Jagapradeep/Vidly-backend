const express = require("express");
const mongoose = require("mongoose");
const genres = require("./routes/genres");
const movies = require("./routes/movies");
const rentals = require("./routes/rentals");
const customers = require("./routes/customers");
const app = express();

mongoose
  .connect("mongodb://localhost/vidly", {
    useMongoClient: true,
  })
  .then(() => console.log("Connected to Mongo DB"))
  .catch((err) => console.error("Could not connect to Mongo DB ...", err));

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/movies", movies);
app.use("/api/rentals", rentals);
app.use("/api/customers", customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
