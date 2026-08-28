function MovieDetail({ movie, handleCloseMovieDetail }) {
     if (!movie) return null;

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/no-poster.jpg";

    const year = movie.release_date
        ? movie.release_date.slice(0, 4)
        : "N/A";

    return (
        <aside className="movie-detail">

            <button className="movie-detail-close"
                    onClick={handleCloseMovieDetail} > ✕ </button>
            <img
                className="movie-detail-poster"
                src={posterUrl}
                alt={movie.title}
            />
            <div className="movie-detail-info">
                <h2>{movie.title}</h2>
                <p><strong>Release year:</strong> {year}</p>
                <p>
                    <strong>Vote average:</strong> ⭐ {movie.vote_average?.toFixed(1)}
                </p>
                <p>
                    <strong>Description:</strong>
                    <br />
                    {movie.overview || "No description available."}
                </p>
            </div>
        </aside>
    );
}
export default MovieDetail;