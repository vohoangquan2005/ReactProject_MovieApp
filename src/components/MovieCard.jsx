// HIỂN THỊ 1 PHIM
function MovieCard({ movie, handleMovieClick,
                     favorites, handleFavorite,
                     watchlist, handleWatchlist }) {
    const isFavorite = favorites.some((item) => item.imdbID === movie.imdbID);
    const handleFavoriteClick = (e)=>{
        e.stopPropagation();
        handleFavorite(movie);
    }

    const isInWatchlist = watchlist.some((item) => item.imdbID === movie.imdbID);
    const handleWatchlistClick = (e)=>{
        e.stopPropagation();
        handleWatchlist(movie);
    }
    return (
        <article className="movie-card"
                 onClick={() => handleMovieClick(movie.imdbID)}>
            <div className="movie-poster">
                <img src={movie.Poster} alt={movie.Title} />
                <button className={`favorite-btn ${isFavorite ? "active" : ""}`}
                        onClick={handleFavoriteClick}> ♥ </button>
                <button className={`watchlist-btn ${isInWatchlist ? "active" : ""}`}
                        onClick={handleWatchlistClick}> ▼ </button>
            </div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <div className="movie-meta">
                    <span>{movie.Year}</span>
                    <span>{movie.Type}</span>
                </div>
            </div>
        </article>
    );
}
export default MovieCard;