import './App.css';
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { Home } from "./components/Home"
import { Movies } from './components/Movies'
import { Reviews } from './components/Reviews'
import { MovieDetails } from './components/MovieDetails'
import { Cast } from './components/Cast'
import { NotFound } from './components/NotFound'


function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='header-container container'>
            <h1 className='title'>Movies DB</h1>
            <nav className='nav'>
                <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
                } to="/">Home</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
                } to="/movies">Movies</NavLink>
            </nav>
        </div>
      </header>
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* <footer className='footer'>
        <div className='footer-container container'>
            <h2 className='footer-title'>Movie DB</h2>
            <a className='footer-link' href='https://www.themoviedb.org/'>themoviedb.org API</a>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
