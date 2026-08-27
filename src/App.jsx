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
  // Danh sách yêu thích
  const [favorites, setFavorites] = useState(() =>{
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  })
  // Danh sách xem sau
  const [watchlist, setWatchlist] = useState(() =>{
    const savedWatchlist = localStorage.getItem("watchlist");
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  })
  const [activePage, setActivePage] = useState("home"); // Cho biết đang xem trang nào
  const pageQueries = {   // Biến quy định mỗi page) tìm gì? (Dữ liệu cứng)
    home: "batman",
    popular: "avengers",
    "top-rated": "godfather",
    upcoming: "superman"
  };
  // Loading movies
  const loadMovies = async (query) => {
    setLoading(true);
    setError("");
    try {
      const data = await searchMovies(query);

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
  }

  useEffect(() => {
    if (activePage === "favorites") return;
    const query = pageQueries[activePage];
    if (query){
      loadMovies(query);
    }
  }, [activePage]);
  // Xử lý tìm kiếm
  const handleSearch =async () =>{
    if (!search.trim()) return;
    await loadMovies(search);
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
  // Xử lý Watchlist
  const handleWatchlist = (movie) =>{
    setWatchlist((pre) =>{
      const isWatchlist = pre.some((item) => item.imdbID === movie.imdbID)
      if (isWatchlist){
        return pre.filter((item) => item.imdbID !== movie.imdbID)
      }
      return [...pre, movie]
    })
  }
  // Lưu Favorite vào localStorage
  useEffect(() =>{
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites])
  // Lưu Watchlist vào localStorage
  useEffect(() =>{
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  },[watchlist])

  // Đóng MovieDetail
  const handleCloseMovieDetail = () => {
      setSelectedMovie(null);
  };

  // Xử lý SideBar
  const handlePageChange = (page)=>{
    setActivePage(page);
  }

  let displayedMovies = movies;
  if (activePage === "favorites") {
    displayedMovies = favorites;
  }
  if (activePage === "watchlist") {
    displayedMovies = watchlist;
  }

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
        watchlist={watchlist}
        handleWatchlist={handleWatchlist}
        activePage={activePage}
      />

    </div>
  )
}

export default App