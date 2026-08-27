// HIỂN THỊ 1 PHIM
function MovieCard({ movie, handleMovieClick,
                     favorites, handleFavorite }) {
    const isFavorite = favorites.some((item) => item.imdbID === movie.imdbID);
    const handleFavoriteClick = (e)=>{
        e.stopPropagation();
        handleFavorite(movie);
    }
    return (
        <article className="movie-card"
                 onClick={() => handleMovieClick(movie.imdbID)}>
            <div className="movie-poster">
                <img src={movie.Poster} alt={movie.Title}
                />
            </div>
            <button className={`favorite-btn ${isFavorite ? "active" : ""}`}
                    onClick={handleFavoriteClick}> ♥ </button>
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