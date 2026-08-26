const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
// https://www.omdbapi.com/?apikey=API_KEY&s=movie_name
// https://www.omdbapi.com/?apikey=abc123&s=Batman
// Do đó mới có dòng base-url nè
const BASE_URL = "https://www.omdbapi.com/";
export async function searchMovies(query){
    const reponse = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&s=${query}`
    );
    const data = await reponse.json();
    return data;
}

export async function getMovieDetails(imdbID) {
    const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
    );
    return response.json();
}