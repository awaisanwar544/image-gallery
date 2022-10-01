import './App.css';
import Home from './pages/Home'
import Liked from './pages/Liked'
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-6">
        <header className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-row justify-center items-center w-full">
            <SearchBar />
          </div>
          <nav>
            nav
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/liked" element={<Liked/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
