import PropTypes from 'prop-types';

export default PropTypes.shape({
  unit: PropTypes.number,
  show_id: PropTypes.number,
  show_title: PropTypes.string,
  release_year: PropTypes.string,
  rating: PropTypes.string,
  category: PropTypes.string,
  show_cast: PropTypes.string,
  director: PropTypes.string,
  summary: PropTypes.string,
  poster: PropTypes.string,
  mediatype: PropTypes.number,
  runtime: PropTypes.string,
});
