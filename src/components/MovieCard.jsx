// HIỂN THỊ 1 PHIM
function MovieCard({ movie }) {
    return (
        <article className="movie-card">
            <div className="movie-poster">
                <img src={movie.Poster} alt={movie.Title}
                />
            </div>
            <button className="favorite-btn"> ♥ </button>
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