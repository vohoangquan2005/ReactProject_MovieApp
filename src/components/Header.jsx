// HEADER + SEARCH BAR
function Header() {
    return (
        <header className="header">
            <div className="header-title">
                <h2>🎬 Discover Movies</h2>
                <p>Find your next favorite movie</p>
            </div>
             <div className="search-bar">
                <span>⌕</span>
                <input type="text" placeholder="Search movies..."/>
            </div>
        </header>
        
    );
}
export default Header;