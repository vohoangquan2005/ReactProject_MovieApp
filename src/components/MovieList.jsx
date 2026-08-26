// HIỂN THỊ NHIỀU PHIM
import MovieCard from "./MovieCard";

function MovieList({ movies, handleMovieClick }) {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    handleMovieClick={handleMovieClick}
                />
            ))}
        </div>
    );
}
export default MovieList;