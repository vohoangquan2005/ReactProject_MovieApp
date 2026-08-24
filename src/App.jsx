import { useEffect, useState } from 'react'
import './App.css'

import { searchMovies } from "./services/movieApi";

// Components
import SideBar from "./components/SideBar.jsx"
import MainContent from "./components/MainContent";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function testAPI(){
      const data = await searchMovies("batman");
      if (data.Response === "True") {
          setMovies(data.Search);
      } else {
          setMovies([]);
      }
      console.log(movies);
    }
    testAPI();
  },[])


  return (
    <div className="app">
      <SideBar />
      
      <MainContent 
        movies={movies} />

    </div>
  )
}

export default App