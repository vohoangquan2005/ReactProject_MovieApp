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
                      handleCloseMovieDetail,
                      favorites, handleFavorite,
                      watchlist, handleWatchlist,
                      activePage} ) {
    return (
        <main className="main-content">
            <Header 
                search={search} 
                setSearch={setSearch}
                handleSearch={handleSearch}/>

            {activePage === "favorites" && (
                <h2 className="page-title">❤️ My Favorites</h2>
            )}

            {activePage === "watchlist" && (
                <h2 className="page-title">🔖 My Watchlist</h2>
            )}

            {loading && <p>Loading movies...</p>}
            {error && !loading && <p>{error}</p>}

            {!loading && !error && movies.length === 0 && (
                <p className="empty-message">
                    {activePage === "favorites"
                        ? "You haven't added any favorites yet."
                        : activePage === "watchlist"
                        ? "Your watchlist is empty."
                        : "No movies found."
                    }
                </p>
            )}
            <div className="movie-area">

                <div className="movie-list-area">
                    {!loading && !error && (
                        <MovieList
                            movies={movies}
                            handleMovieClick={handleMovieClick}
                            favorites={favorites}
                            handleFavorite={handleFavorite}
                            watchlist={watchlist}
                            handleWatchlist={handleWatchlist}
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