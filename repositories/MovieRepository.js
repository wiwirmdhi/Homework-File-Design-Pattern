const Movie = require("../models/Movie");

class MovieRepository {
  constructor() {
    this.movies = [];
  }

  getAllMovies() {
    return this.movies;
  }

  getMovieById(id) {
    return this.movies.find((movie) => movie.id === id);
  }

  addMovie(title, description, releaseYear) {
    const id = this.movies.length + 1;
    const movie = new Movie(id, title, description, releaseYear);
    this.movies.push(movie);
    return movie;
  }

  updateMovie(id, title, description, releaseYear) {
    const movie = this.getMovieById(id);
    if (movie) {
      movie.title = title;
      movie.description = description;
      movie.releaseYear = releaseYear;
      return movie;
    }
    return null;
  }

  deleteMovie(id) {
    const index = this.movies.findIndex((movie) => movie.id === id);
    if (index !== -1) {
      this.movies.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = MovieRepository;
