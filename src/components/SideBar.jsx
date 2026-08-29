// SIDE BAR
function SideBar({activePage, handlePageChange, theme, handleToggleTheme}) {
    const genres = [
                { id: 28, name: "Action" },
                { id: 12, name: "Adventure" },
                { id: 16, name: "Animation" },
                { id: 35, name: "Comedy" },
                { id: 80, name: "Crime" },
                { id: 18, name: "Drama" },
                { id: 14, name: "Fantasy" },
                { id: 27, name: "Horror" },
                { id: 10749, name: "Romance" },
                { id: 878, name: "Sci-Fi" },
                { id: 53, name: "Thriller" }
    ];
    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    <span>▶</span>
                    <h1>MOVIE <span>APP</span></h1>
                </div>
                {/* Điều hướng */}
                <div className="navigation">
                    <a href="#"
                       className={activePage === "home" ? "active" : ""}
                       onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange("home");
                                }}
                    >
                            <span>🏠</span>
                            <span>Home</span>
                    </a>
                    <a href="#"
                       className={activePage === "popular" ? "active" : ""}
                       onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange("popular");
                                }}
                    >
                            <span>🔥</span>
                            <span>Popular</span>
                    </a>
                    <a href="#"
                       className={activePage === "top-rated" ? "active" : ""}
                       onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange("top-rated");
                                }}
                    >
                            <span>⭐</span>
                            <span>Top Rated</span>
                    </a>
                    <a href="#"
                       className={activePage === "upcoming" ? "active" : ""}
                       onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange("upcoming");
                                }}
                    >
                            <span>📅</span>
                            <span>Upcoming</span>
                    </a>
                    <a href="#"
                       className={activePage === "favorites" ? "active" : ""}
                       onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange("favorites");
                                }}
                    >
                            <span>❤️</span>
                            <span>Favorites</span>
                    </a>
                    <a href="#"
                       className={activePage === "watchlist" ? "active" : ""}
                       onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange("watchlist");
                                }}
                    >
                            <span>🔖</span>
                            <span>Watchlist</span>
                    </a>
                </div>
                {/* Thể loại */}
                <div className="genres">
                    <h2>GENRES</h2>
                    {genres.map((genre) => (
                        <a href="#"
                            key={genre.id}
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(`genre-${genre.id}`)}
                            }
                        > {genre.name}</a>
                    ))}
                </div>
                <div className="theme-toggle">
                    <span>{theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}</span>
                    <input type="checkbox"
                           checked={theme === "light"}
                           onChange={handleToggleTheme} />
                </div>
            </aside>
        </>
    )
}
export default SideBar;