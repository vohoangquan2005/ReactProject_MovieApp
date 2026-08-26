import { useEffect, useState } from 'react'
import './App.css'

import { searchMovies } from "./services/movieApi";

// Components
import SideBar from "./components/SideBar.jsx"
import MainContent from "./components/MainContent";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <div className="app">
      <SideBar />

      <MainContent 
        movies={movies} 
        search={search} 
        setSearch={setSearch}
        handleSearch={handleSearch}
        loading={loading}
        error={error}/>

    </div>
  )
}

export default App