import { useEffect, useState } from 'react'
import './App.css'

import { searchMovies, getMovieDetails } from "./services/movieApi";

// Components
import SideBar from "./components/SideBar.jsx"
import MainContent from "./components/MainContent";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await searchMovies("batman");

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
          setError("No movies found!");
        }
      } catch (error) {
        setMovies([]);
        setError("Something went wrong. Please try again!");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  const handleSearch =async () =>{
    if (!search.trim()) return;
    setLoading(true);
    setError("");
    try{
      const data = await searchMovies(search);
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError("No movies found!")
      }
    } catch(error){
      setMovies([]);
      setError("Something went wrong. Pleaese try again!");
    } finally{
      setLoading(false);
    }
  }

  const handleMovieClick = async (imdbID) => {
    console.log("Clicked imdbID:", imdbID);
    try {
      const data = await getMovieDetails(imdbID);
      console.log("Movie detail data:", data);
      setSelectedMovie(data);
    } catch (error) {
      console.error("Failed to get movie detail:", error);
    }
  }

  const handleCloseMovieDetail = () => {
      setSelectedMovie(null);
  };

  return (
    <div className="app">
      <SideBar />

      <MainContent 
        movies={movies} 
        search={search} 
        setSearch={setSearch}
        handleSearch={handleSearch}
        loading={loading}
        error={error}
        handleMovieClick={handleMovieClick}
        selectedMovie={selectedMovie}
        handleCloseMovieDetail={handleCloseMovieDetail}
      />

    </div>
  )
}

export default App