import PropTypes from 'prop-types';

export const movieShape = {
  id: PropTypes.number,
  title: PropTypes.string,
  original_title: PropTypes.string,
  name: PropTypes.string,
  original_name: PropTypes.string,
  overview: PropTypes.string,
  backdrop_path: PropTypes.string,
  poster_path: PropTypes.string,
  popularity: PropTypes.number,
  vote_count: PropTypes.number,
  vote_average: PropTypes.number,
  genre_ids: PropTypes.array,
  original_language: PropTypes.string,
  release_date: PropTypes.string,
  adult: PropTypes.bool,
  video: PropTypes.bool,
  origin_country: PropTypes.array,
  first_air_date: PropTypes.string,
};

export default PropTypes.shape(movieShape);
