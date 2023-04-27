import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import NowPlayingPage from './page/NowPlayingPage';
import UpComingPage from './page/UpcomingPage';
import SearchPage from './page/SearchPage';

function App() {
  return (
    <>
      <header>
        <h1>Movie Catalogue</h1>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/now-playing" element={<NowPlayingPage />} />
          <Route path="/upcoming" element={<UpComingPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
