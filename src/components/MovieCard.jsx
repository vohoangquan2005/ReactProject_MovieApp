// HIỂN THỊ 1 PHIM
function MovieCard({ movie }) {
    return (
        <article className="movie-card">
            <div className="movie-poster">
                <img
                    src={movie.poster}
                    alt={movie.title}
                />
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <div className="movie-meta">
                    <span>{movie.year}</span>
                    <span>⭐ {movie.rating}</span>
                </div>
            </div>
        </article>
    );
}
export default MovieCard;