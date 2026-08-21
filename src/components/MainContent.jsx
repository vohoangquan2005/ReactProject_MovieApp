// MAIN CONTENT
import Header from "./Header";
import FeaturedMovie from "./FeaturedMovie";
import MovieSection from "./MovieSection";


function MainContent() {
    const movies = [
    {
        id: 1,
        title: "Dune: Part Two",
        year: 2024,
        rating: 8.7,
        poster: "https://..."
    },
    {
        id: 2,
        title: "Interstellar",
        year: 2014,
        rating: 8.7,
        poster: "https://..."
    },
    {
        id: 3,
        title: "The Batman",
        year: 2022,
        rating: 7.8,
        poster: "https://..."
    },
    {
        id: 4,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        poster: "https://..."
    }
];
    return (
        <main className="main-content">
            <Header />

            <FeaturedMovie />

            <MovieSection
                title="Popular Movies"
                movies={movies}
            />

            <MovieSection
                title="Top Rated"
                movies={movies}
            />

            <div class="tooltip-wrapper">
                <button class="my-btn">VHQ</button>
                <span class="tooltip-text">😎</span>
            </div>
        </main>
    );
}
export default MainContent;