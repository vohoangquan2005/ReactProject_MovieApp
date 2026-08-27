// HIỂN THỊ NHIỀU PHIM
import MovieCard from "./MovieCard";

function MovieList({ movies, handleMovieClick,
                     favorites, handleFavorite,
                     watchlist, handleWatchlist}) {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    handleMovieClick={handleMovieClick}
                    favorites={favorites}
                    handleFavorite={handleFavorite}
                    watchlist={watchlist}
                    handleWatchlist={handleWatchlist}
                />
            ))}
        </div>
    );
}
export default MovieList;