// HIỂN THỊ NHIỀU PHIM
import MovieCard from "./MovieCard";

function MovieList({ movies, handleMovieClick,
                     favorites, handleFavorite}) {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    handleMovieClick={handleMovieClick}
                    favorites={favorites}
                    handleFavorite={handleFavorite}
                />
            ))}
        </div>
    );
}
export default MovieList;