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
  const [favorites, setFavorites] = useState(() =>{
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  })
  const [activePage, setActivePage] = useState("home"); // Cho biết đang xem trang nào
  // Loading movies
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
  // Xử lý tìm kiếm
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
  // Click vào Movie Card
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

  // Xử lý Favorite
  const handleFavorite = (movie) =>{
    setFavorites((pre) =>{
      const isFavorite = pre.some((item) => item.imdbID === movie.imdbID)
      if (isFavorite){
        return pre.filter((item) => item.imdbID !== movie.imdbID)
      }
      return [...pre, movie]
    })
  }

  useEffect(() =>{
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites])

  const handleCloseMovieDetail = () => {
      setSelectedMovie(null);
  };

  // Xử lý SideBar
  const handlePageChange = (page)=>{
    setActivePage(page);
  }

  const displayedMovies = activePage === "favorites" ? favorites : movies;

  return (
    <div className="app">
      <SideBar 
        activePage={activePage}
        handlePageChange={handlePageChange}
      />

      <MainContent 
        movies={displayedMovies} 
        search={search} 
        setSearch={setSearch}
        handleSearch={handleSearch}
        loading={loading}
        error={error}
        handleMovieClick={handleMovieClick}
        selectedMovie={selectedMovie}
        handleCloseMovieDetail={handleCloseMovieDetail}
        favorites={favorites}
        handleFavorite={handleFavorite}
        activePage={activePage}
      />

    </div>
  )
}

export default App