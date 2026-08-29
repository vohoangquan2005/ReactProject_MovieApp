function MovieDetail({movie, handleCloseMovieDetail,
                      favorites, handleFavorite,
                      watchlist, handleWatchlist,
                      handleWatchTrailer}) {
     if (!movie) return null;
     const isFavorite = favorites.some((item) => item.id === movie.id);
    const isWatchlist = watchlist.some((item) => item.id === movie.id);
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/no-poster.jpg";

    const year = movie.release_date
        ? movie.release_date.slice(0, 4)
        : "N/A";

    return (
        <aside className="movie-detail">

            <button className="movie-detail-close"
                    onClick={handleCloseMovieDetail} > 
                    ✕ 
            </button>
            <img
                className="movie-detail-poster"
                src={posterUrl}
                alt={movie.title}
            />
            <div className="movie-detail-info">
                <h2>{movie.title}</h2>
                <div className="movie-detail-meta">
                    <span><strong>Vote average: </strong>⭐ {movie.vote_average?.toFixed(1)}</span>
                    <span><strong>Year: </strong>{year}</span>

                    {movie.runtime && (
                        <span><strong>Run time: </strong>{movie.runtime} min</span>
                    )}
                </div>
                <div className="movie-detail-genres">
                    <strong>Gener name: </strong>
                    {movie.genres?.map((genre) => (
                        <span key={genre.id}>{genre.name}</span>
                    ))}
                </div>
                <p className="movie-detail-overview"><strong>Overview: </strong>{movie.overview || "No description available."}</p>
                <div className="movie-detail-actions">
                    <button className={isFavorite ? "active" : ""}
                            onClick={() => handleFavorite(movie)}
                    >
                        {isFavorite ? "♥" : "♡"} Favorite
                    </button>
                    <button className={isWatchlist ? "active" : ""}
                            onClick={() => handleWatchlist(movie)}
                    >
                        {isWatchlist ? "🔖" : "🏷️"} Watchlist
                    </button>
                    <button className="detail-trailer-btn"
                            onClick={() => handleWatchTrailer(movie.id)}
                    >
                        ▶ Watch Trailer
                    </button>
                </div>
            </div>
        </aside>
    );
}
export default MovieDetail;