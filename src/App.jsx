import { useState } from 'react'
import './App.css'
// Components
import SideBar from "./components/SideBar.jsx"
import MainContent from "./components/MainContent";

function App() {

  return (
    <div className="app">
      <SideBar />
      
      <MainContent />

    </div>
  )
}

export default App
