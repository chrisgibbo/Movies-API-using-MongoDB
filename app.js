require("express-async-errors");
const express = require("express");
require("dotenv").config();

const addMovie = require("./controllers/addMovie");

const mongoose = require("mongoose");
const getAllMovies = require("./controllers/getAllMovies");
const getSingleMovie = require("./controllers/getSingleMovie");
const { editMovie } = require("./controllers/editMovie");
const deleteMovie = require("./controllers/deleteMovies");
const movieRecommendation = require("./controllers/movieRecommendation");
const errorHandler = require("./handlers/errorHandler");

// connection to mongodb ...

mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log("connection to MongoDB failed");
  });

const app = express();

app.use(express.json());

// models...

require("./models/movies.model");

// Routes ...

app.post("/api/movies", addMovie);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:movie_id", getSingleMovie);
app.patch("/api/movies", editMovie);
app.delete("/api/movies/:movies_id", deleteMovie);

// OpenAI section ---

app.get("/api/movies/openai/getRecommendation", movieRecommendation);

app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
