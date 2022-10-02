import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home'
import Liked from './pages/Liked'
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [imagesList, setImagesList] = useState([])
  const [likedImages, setLikedImages] = useState([])

  return (
    <Router>
      <div className="container mx-auto p-6">
        <header className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-row justify-center items-center w-full">
            <SearchBar setImagesList={setImagesList} />
          </div>
          <nav>
            <Navigation likedImages={likedImages} />
          </nav>
        </header>
        <div className='mt-10'>
          <Routes>
            <Route path="/" element={<Home imagesList={imagesList} likedImages={likedImages} setLikedImages={setLikedImages}/>} />
            <Route path="/liked" element={<Liked likedImages={likedImages} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
