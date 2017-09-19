import movies from './movies.json';
import movie from './movie.json';

export default {
  getMovies() {
    return Promise.resolve(movies);
  },

  getMovie() {
    return Promise.resolve(movie);
  }
};

