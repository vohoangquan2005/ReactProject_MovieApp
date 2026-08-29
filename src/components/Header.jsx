// HEADER + SEARCH BAR
function Header( {search, setSearch, handleSearch, handleClearSearch }) {
    const onKeyDown = (e) =>{
        if (e.key === "Enter"){
            handleSearch();
        }
    }
    return (
        <header className="header">
            <div className="header-title">
                <h2>🎬 Discover Movies</h2>
                <p>Find your next favorite movie</p>
            </div>
             <div className="search-bar">
                <span>⌕</span>
                <input type="text" placeholder="Search movies..."
                       value={search} 
                       onChange={(e)=>setSearch(e.target.value)}
                       onKeyDown={onKeyDown} />
                {search && (
                <button className="clear-search"
                        onClick={handleClearSearch}
                > ✕ </button>
            )}
            </div>
            <button className="btn-search" onClick={handleSearch}> 🔍 </button>
        </header>
    );
}
export default Header;