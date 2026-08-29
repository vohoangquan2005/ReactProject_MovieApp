// MAIN CONTENT
import Header from "./Header";
import FeaturedMovie from "./FeaturedMovie";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import MovieSkeleton from "./MovieSkeleton";
import TrailerModal from "./TrailerModal";

function MainContent( {movies, 
                      search, setSearch, handleSearch, handleClearSearch,
                      loading, error, 
                      handleMovieClick,
                      selectedMovie,
                      handleCloseMovieDetail,
                      favorites, handleFavorite,
                      watchlist, handleWatchlist,
                      activePage,
                      currentPage, setCurrentPage,
                      totalPages,
                      handleWatchTrailer, trailer, handleCloseTrailer} ) {
    return (
        <main className="main-content">
            {activePage === "home" && (
                <FeaturedMovie 
                    movie={movies[0]} 
                    handleWatchTrailer={handleWatchTrailer}
                />
            )}

            <Header 
                search={search} 
                setSearch={setSearch}
                handleSearch={handleSearch}
                handleClearSearch={handleClearSearch}
            />
                
            <TrailerModal
                trailer={trailer}
                onClose={handleCloseTrailer}
            />

            {activePage === "favorites" && (
                <>
                    <hr />
                    <h2 className="page-title">❤️ My Favorites</h2>
                    <hr /> 
                    <p>There are {favorites.length} {favorites.length === 1 ? "movie" : "movies"} in the favorite list</p>
                    <br />
                </>
            )}

            {activePage === "watchlist" && (
                <>
                    <hr />
                    <h2 className="page-title">🔖 My Watchlist</h2>
                    <hr />
                    <p>There are {watchlist.length} {watchlist.length === 1 ? "movie" : "movies"} on the watchlist</p>
                    <br />
                </>
            )}

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
                    {loading ? (
                        <div className="movie-list">
                            {Array.from({ length: 8 }).map((_, index) => (
                                <MovieSkeleton key={index} />
                            ))}
                        </div>
                    ) : !error ? (
                        <MovieList
                            movies={movies}
                            handleMovieClick={handleMovieClick}
                            favorites={favorites}
                            handleFavorite={handleFavorite}
                            watchlist={watchlist}
                            handleWatchlist={handleWatchlist}
                        />
                    ) : null}
                </div>

                <MovieDetail 
                    movie={selectedMovie} 
                    handleCloseMovieDetail={handleCloseMovieDetail}
                    favorites={favorites}
                    handleFavorite={handleFavorite}
                    watchlist={watchlist}
                    handleWatchlist={handleWatchlist}
                    handleWatchTrailer={handleWatchTrailer}/>
            </div>
            {activePage !== "favorites" && activePage !== "watchlist" && (
                <div className="pagination">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                    > ← Previous </button>
                    <span>Page {currentPage}</span>
                    <button
                        disabled={currentPage >= totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                    > Next → </button>
                </div>
            )}

            <div className="tooltip-wrapper">
                <button className="my-btn">VHQ</button>
                <span className="tooltip-text">😎</span>
            </div>
        </main>
    );
}
export default MainContent;