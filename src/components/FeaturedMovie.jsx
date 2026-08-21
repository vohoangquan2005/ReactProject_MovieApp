// PHIM NỔI BẬT
function FeaturedMovie(){
    return(
        <div className="featured-movie">
            <div className="featured-content">
                <span className="featured-label">FEATURED MOVIE</span>
                 <h1>Dune: Part Two</h1>
                 <div className="movie-meta">
                    <span>⭐ 8.7</span>
                    <span>2024</span>
                    <span>Sci-Fi</span>
                    <span>Adventure</span>
                </div>
                <p>
                    Paul Atreides unites with Chani and the Fremen
                    while seeking revenge against the conspirators
                    who destroyed his family.
                </p>

                <button className="watch-button">
                    ▶ Watch Trailer
                </button>
            </div>
        </div>
    )
}
export default FeaturedMovie;