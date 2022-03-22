import Movie from './Movie';

const MoviesList = (props) => {
  const {movies} = props;
  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie}/> //используем спредоператором ключи объекта муви в пропсах
      ))}
    </div>
  );
}

export default MoviesList;
