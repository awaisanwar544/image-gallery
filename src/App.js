import './App.css';
import Home from './pages/Home'
import Liked from './pages/Liked'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function App() {
  return (
    <Router>
      <div className="container mx-auto p-6">
        <header className="flex flex-row w-full justify-between">
          <div className="flex flex-row justify-center items-center w-full">
            <div className="flex flex-row items-center w-1/2 border border-gray-300 rounded-full pl-2">
              <div className="pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </div>
              <input className="text-gray-900 text-sm font-bold block w-full bg-transparent pl-10 p-2.5 focus:outline-none" id="search" type="search" placeholder="Search..." autofocus required />
            </div>
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
