// MAIN CONTENT
import Header from "./Header";
import FeaturedMovie from "./FeaturedMovie";
import MovieSection from "./MovieSection";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

function MainContent( {movies, 
                      search, setSearch, handleSearch, 
                      loading, error, 
                      handleMovieClick,
                      selectedMovie,
                      handleCloseMovieDetail} ) {
    return (
        <main className="main-content">
            <Header 
                search={search} 
                setSearch={setSearch}
                handleSearch={handleSearch}/>

            {loading && <p>Loading movies...</p>}
            {error && !loading && <p>{error}</p>}

            <div className="movie-area">

                <div className="movie-list-area">
                    {!loading && !error && (
                        <MovieList
                            movies={movies}
                            handleMovieClick={handleMovieClick}
                        />
                    )}
                </div>

                <MovieDetail 
                    movie={selectedMovie} 
                    handleCloseMovieDetail={handleCloseMovieDetail}/>
            </div>

            <div className="tooltip-wrapper">
                <button className="my-btn">VHQ</button>
                <span className="tooltip-text">😎</span>
            </div>
        </main>
    );
}
export default MainContent;