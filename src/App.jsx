import { useEffect, useState } from 'react'
import './App.css'
// API
import { searchMovies, getMovieDetails, getPopularMovies, 
    getTopRatedMovies, getUpcomingMovies,
    getMoviesByGenre, getNowPlayingMovies,
    getMovieVideos } from "./services/movieApi";

// Components
import SideBar from "./components/SideBar.jsx"
import MainContent from "./components/MainContent";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  // Danh sách yêu thích
  const [favorites, setFavorites] = useState(() =>{
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Danh sách xem
  const [watchlist, setWatchlist] = useState(() =>{
    const savedWatchlist = localStorage.getItem("watchlist");
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  })

  // Page 
  const [activePage, setActivePage] = useState("home");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Loading movies
  const loadMovies = async (page) => {
    setLoading(true);
    setError("");
    try {
      let data;
      if (isSearching) {
        data =await searchMovies(search, currentPage);
      }
      else if (page === "home") {
        data = await getNowPlayingMovies(currentPage);
      }
      else if (page === "popular") {
        data = await getPopularMovies(currentPage);
      } 
      else if (page === "top-rated") {
        data = await getTopRatedMovies(currentPage);
      } 
      else if (page === "upcoming") {
        data = await getUpcomingMovies(currentPage);
      } 
      else if (page.startsWith("genre-")) {
        // Loại bỏ genre- chỉ giữ lại id của phim
        const genreId = page.replace("genre-", "");
        data = await getMoviesByGenre(genreId, currentPage);
      }

      if (data.results) {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } 
      else {
        setMovies([]);
        setTotalPages(1);
        setError("No movies found!");
      }
    } catch (error) {
      console.error(error);
      setMovies([]);
      setError("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };
  // load movies khi thay đổi page
  useEffect(() => {
    if (activePage === "favorites" || activePage === "watchlist") {
        return;
    }
    loadMovies(activePage);
  }, [activePage, currentPage, isSearching]);

  // Đổi trang
  const handlePageChange = (page)=>{
    setActivePage(page);
    setCurrentPage(1);
    setSelectedMovie(null);
    setIsSearching(false);
  }

  // Xử lý tìm kiếm
  const handleSearch =async () =>{
    if (!search.trim()) return;
    setIsSearching(true);
    setCurrentPage(1);
    setLoading(true);
    setError("");
    try {
      const data = await searchMovies(search, 1);
      if (data.results && data.results.length > 0) {
        setMovies(data.results);
        setTotalPages(data.total_pages);
        console.log(data);
      } 
      else {
        setMovies([]);
        setTotalPages(1);
        setError("No movies found!");
      }
    } catch (error) {
      console.error(error);
      setMovies([]);
      setError("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  }
  // Click vào Movie Card
  const handleMovieClick = async (movieId) => {
    try {
        const data = await getMovieDetails(movieId);
        setSelectedMovie(data);
    } catch (error) {
        console.error("Failed to get movie detail:", error);
    }
  };

  // Đóng MovieDetail
  const handleCloseMovieDetail = () => {
      setSelectedMovie(null);
  };

  // Xử lý Favorite
  const handleFavorite = (movie) =>{
    setFavorites((pre) =>{
      const isFavorite = pre.some((item) => item.id === movie.id)
      if (isFavorite){
        return pre.filter((item) => item.id !== movie.id)
      }
      return [...pre, movie]
    })
  }

  // Xử lý Watchlist
  const handleWatchlist = (movie) =>{
    setWatchlist((pre) =>{
      const isWatchlist = pre.some((item) => item.id === movie.id)
      if (isWatchlist){
        return pre.filter((item) => item.id !== movie.id)
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

  let displayedMovies = movies;
  if (activePage === "favorites") {
    displayedMovies = favorites;
  }
  if (activePage === "watchlist") {
    displayedMovies = watchlist;
  }

  // Xử lý trailer
  const handleWatchTrailer = async (movieId) => {
    try {
      const data = await getMovieVideos(movieId);
      const trailer = data.results.find((video) =>
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.official === true
      );
      setTrailer(trailer || null);
    } catch (error) {
      console.error("Failed to get trailer:", error);
      setTrailer(null);
    }
  };
  // Dừng xem trailer
  const handleCloseTrailer = () => {
    setTrailer(null);
  };

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
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        handleWatchTrailer={handleWatchTrailer}
        trailer={trailer}
        handleCloseTrailer={handleCloseTrailer}
      />

    </div>
  )
}

export default App