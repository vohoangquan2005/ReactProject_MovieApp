function MovieDetail({ movie, handleCloseMovieDetail }) {
    if (!movie) return null;

    return (
        <aside className="movie-detail">

            <button className="movie-detail-close"
                    onClick={handleCloseMovieDetail} > ✕ </button>
            <img
                className="movie-detail-poster"
                src={movie.Poster}
                alt={movie.Title}
            />
            <div className="movie-detail-info">
                <h2>{movie.Title}</h2>
                <div className="movie-detail-meta">
                    <span>{movie.Year}</span>
                    <span>{movie.Runtime}</span>
                    <span>{movie.Rated}</span>
                </div>
                <p className="movie-detail-plot">
                    {movie.Plot}
                </p>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Director:</strong> {movie.Director}</p>
                <p><strong>Actors:</strong> {movie.Actors}</p>
                <p><strong>Language:</strong> {movie.Language}</p>
                <p><strong>Country:</strong> {movie.Country}</p>
            </div>
        </aside>
    );
}
export default MovieDetail;