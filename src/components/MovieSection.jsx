// QUẢN LÝ LỰA CHỌN PHIM: ví dụ như Popular Movies hay Top Rated
import MovieList from "./MovieList";

function MovieSection({ title, movies }) {
    return (
        <section className="movie-section">
            <div className="section-header">
                <h2>{title}</h2>
                <button>See All</button>
            </div>
            <MovieList movies={movies} />
        </section>
    );
}
export default MovieSection;