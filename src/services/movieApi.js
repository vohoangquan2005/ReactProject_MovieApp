// ========================== ĐÂY LÀ OMDB API ==========================
// const API_OMDB_KEY = import.meta.env.VITE_OMDB_API_KEY;
// https://www.omdbapi.com/?apikey=API_KEY&s=movie_name
// https://www.omdbapi.com/?apikey=abc123&s=Batman
// Do đó mới có dòng base-url nè
// const BASE_URL = "https://www.omdbapi.com/";
// export async function searchMovies(query){
//     const reponse = await fetch(
//         `${BASE_URL}?apikey=${API_OMDB_KEY}&s=${query}`
//     );
//     const data = await reponse.json();
//     return data;
// }
// export async function getMovieDetails(imdbID) {
//     const response = await fetch(
//         `${BASE_URL}?apikey=${API_OMDB_KEY}&i=${imdbID}&plot=full`
//     );
//     return response.json();
// }

// ========================== ĐÂY LÀ TMDB API ==========================
const API_TMDB_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Tìm kiếm phimm
export async function searchMovies(query){
    const reponse = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_TMDB_KEY}&query=${encodeURIComponent(query)}`
    );
    if (!reponse.ok){
        throw new Error("Failed to search moviews");
    }
    return reponse.json();
}

// Phim phổ biến
export async function getPopularMovies() {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_TMDB_KEY}`
    );
    if (!response.ok) {
        throw new Error("Failed to get popular movies");
    }
    return response.json();
}

// Phim được đánh giá cao
export async function getTopRatedMovies() {
    const response = await fetch(
        `${BASE_URL}/movie/top_rated?api_key=${API_TMDB_KEY}`
    );
    if (!response.ok) {
        throw new Error("Failed to get top rated movies");
    }
    return response.json();
}

// Phim sắp chiếu
export async function getUpcomingMovies() {
    const response = await fetch(
        `${BASE_URL}/movie/upcoming?api_key=${API_TMDB_KEY}`
    );
    if (!response.ok) {
        throw new Error("Failed to get upcoming movies");
    }
    return response.json();
}
// Chi tiết phim
export async function getMovieDetails(movieId) {
    const response = await fetch(
        `${BASE_URL}/movie/${movieId}?api_key=${API_TMDB_KEY}`
    );
    if (!response.ok) {
        throw new Error("Failed to get movie details");
    }
    return response.json();
}