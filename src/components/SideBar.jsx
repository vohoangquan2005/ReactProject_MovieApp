// SIDE BAR
function SideBar() {
    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    <span>▶</span>
                    <h1>MOVIE <span>APP</span></h1>
                </div>
                {/* Điều hướng */}
                <div className="navigation">
                    <a href="#">
                        <span>⌂</span>
                        <span>Home</span>
                    </a>
                    <a href="#">
                        <span>♡</span>
                        <span>Popular</span>
                    </a>
                    <a href="#">
                        <span>☆</span>
                        <span>Top Rated</span>
                    </a>
                    <a href="#">
                        <span>▣</span>
                        <span>Upcoming</span>
                    </a>
                    <a href="#">
                        <span>♡</span>
                        <span>Favorites</span>
                    </a>
                    <a href="#">
                        <span>▢</span>
                        <span>Watchlist</span>
                    </a>
                    
                </div>
                <div className="genres">
                    <h2>GENRES</h2>
                    <a href="#">Action</a>
                    <a href="#">Adventure</a>
                    <a href="#">Animation</a>
                    <a href="#">Comedy</a>
                    <a href="#">Crime</a>
                    <a href="#">Drama</a>
                    <a href="#">Fantasy</a>
                    <a href="#">Horror</a>
                    <a href="#">Romance</a>
                    <a href="#">Sci-Fi</a>
                    <a href="#">Thriller</a>
                </div>
                <div className="theme-toggle">
                    <span>◐ Dark Mode</span>
                    <input type="checkbox"></input>
                </div>
            </aside>
        </>
    )
}
export default SideBar;