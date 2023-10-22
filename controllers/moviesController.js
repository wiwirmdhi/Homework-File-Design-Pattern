const MovieRepository = require("../repositories/MovieRepository");

const movieRepository = new MovieRepository();

exports.getAllMovies = (req, res) => {
  const movies = movieRepository.getAllMovies();
  res.json(movies);
};

exports.getMovieById = (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movieRepository.getMovieById(id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
};

exports.createMovie = (req, res) => {
  const { title, description, releaseYear } = req.body;
  const movie = movieRepository.addMovie(title, description, releaseYear);
  res.status(201).json(movie);
};

exports.updateMovie = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description, releaseYear } = req.body;
  const updatedMovie = movieRepository.updateMovie(
    id,
    title,
    description,
    releaseYear
  );
  if (updatedMovie) {
    res.json(updatedMovie);
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
};

exports.deleteMovie = (req, res) => {
  const id = parseInt(req.params.id);
  const success = movieRepository.deleteMovie(id);
  if (success) {
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
};
