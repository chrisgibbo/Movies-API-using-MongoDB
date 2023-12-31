const mongoose = require("mongoose");

const addMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const { movie_name, info, rating, description } = req.body;

  // validations  ...

  // if (!movie_name) throw "Movie name is required";
  if (!info) throw "Info is required";
  if (!rating) throw "Rating is required";
  if (rating < 0 || rating > 10) throw "Rating must be between 0 and 10";

  // success code ...

  const createdMovie = await moviesModel.create({
    movie_name: movie_name,
    info: info,
    rating: rating,
    description: description,
  });
  // console.log(createdMovie);

  res.status(200).json({
    status: "success",
    message: "Movie added successfully",
  });
};

module.exports = addMovie;
