function FeaturedMovie({ movie, handleWatchTrailer }) {
    if (!movie) return null;

    const posterUrl = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : "";

    const year = movie.release_date
        ? movie.release_date.slice(0, 4)
        : "N/A";

    return (
        <div className="featured-movie"
             style={{backgroundImage: `url(${posterUrl})`}}>
            <div className="featured-content">
                <span className="featured-label">
                    FEATURED MOVIE
                </span>
                <h1>{movie.title}</h1>
                <div className="movie-meta">
                    <span>⭐ {movie.vote_average?.toFixed(1)}</span>
                    <span>{year}</span>
                    {movie.genre_ids?.slice(0, 2).map((genreId) => (
                        <span key={genreId}>{genreId}</span>
                    ))}
                </div>
                <p>{movie.overview || "No description available."}</p>
                <button className="watch-button"
                        onClick={() => handleWatchTrailer(movie.id)}>
                    ▶ Watch Trailer
                </button>
            </div>
        </div>
    );
}
export default FeaturedMovie;