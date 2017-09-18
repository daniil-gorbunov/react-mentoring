import movies from './movies.json';

export default {
  getMovies() {
    return Promise.resolve(movies);
  },
};

