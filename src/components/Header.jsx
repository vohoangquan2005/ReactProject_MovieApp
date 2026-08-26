// HEADER + SEARCH BAR
function Header( {search, setSearch, handleSearch }) {
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
                       onKeyDown={onKeyDown}/>
            </div>
            <button onClick={handleSearch}> 🔍 </button>
        </header>
        
    );
}
export default Header;