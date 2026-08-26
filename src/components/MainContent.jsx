// MAIN CONTENT
import Header from "./Header";
import FeaturedMovie from "./FeaturedMovie";
import MovieSection from "./MovieSection";
import MovieList from "./MovieList";

function MainContent( {movies, search, setSearch, handleSearch, loading, error} ) {
    return (
        <main className="main-content">
            <Header 
                search={search} 
                setSearch={setSearch}
                handleSearch={handleSearch}/>

            {loading && <p>Loading movies...</p>}
            {error && !loading && <p>{error}</p>}

            {!loading && !error && <MovieList movies={movies} />}

            <div className="tooltip-wrapper">
                <button className="my-btn">VHQ</button>
                <span className="tooltip-text">😎</span>
            </div>
        </main>
    );
}
export default MainContent;