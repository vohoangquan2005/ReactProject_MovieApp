// MAIN CONTENT
import Header from "./Header";
import FeaturedMovie from "./FeaturedMovie";
import MovieSection from "./MovieSection";
import MovieList from "./MovieList";

function MainContent( {movies}) {
    return (
        <main className="main-content">
            <Header />

            <MovieList 
                movies={movies} />

            <div className="tooltip-wrapper">
                <button className="my-btn">VHQ</button>
                <span className="tooltip-text">😎</span>
            </div>
        </main>
    );
}
export default MainContent;