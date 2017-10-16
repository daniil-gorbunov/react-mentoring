export default function buildMovie(md) {
  return {
    id: md.id,
    title: md.title || md.name,
    original_title: md.original_title || md.original_name,
    overview: md.overview,
    backdrop_path: md.backdrop_path,
    poster_path: md.poster_path,
    popularity: md.popularity,
    vote_count: md.vote_count,
    vote_average: md.vote_average,
    genre_ids: md.genre_ids,
    original_language: md.original_language,
    release_date: md.release_date || md.first_air_date,
    origin_country: md.origin_country || null,
    adult: md.adult || null,
    video: md.video || null,
  };
}
