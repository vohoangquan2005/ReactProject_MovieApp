// HIỂN THỊ 1 PHIM
function MovieCard({ movie, handleMovieClick,
                     favorites, handleFavorite,
                     watchlist, handleWatchlist }) {
    const isFavorite = favorites.some((item) => item.id === movie.id);
    const handleFavoriteClick = (e)=>{
        e.stopPropagation();
        handleFavorite(movie);
    }

    const isWatchlist = watchlist.some((item) => item.id === movie.id);
    const handleWatchlistClick = (e)=>{
        e.stopPropagation();
        handleWatchlist(movie);
    }
    // TMDB không trả sẵn Poster URL
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/no-poster.jpg";

    // Lấy năm từ release_date
    const year = movie.release_date
        ? movie.release_date.slice(0, 4)
        : "N/A";

    return (
        <article className="movie-card"
                 onClick={() => handleMovieClick(movie.id)}>
            <div className="movie-poster">
                <img src={posterUrl} alt={movie.title} />
                <button className={`favorite-btn ${isFavorite ? "active" : ""}`}
                        onClick={handleFavoriteClick}> ♥ </button>
                <button className={`watchlist-btn ${isWatchlist ? "active" : ""}`}
                        onClick={handleWatchlistClick}> ▼ </button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <div className="movie-meta">
                    <span>{year}</span>
                    <span>⭐ {movie.vote_average?.toFixed(1)}</span>
                </div>
            </div>
        </article>
    );
}
export default MovieCard;