
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './screens/home/Home';
import MovieList from './components/movieList/MovieList';
import MovieDetail from './screens/movieDetail/MovieDetail';
import Error from './screens/Error';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route  element={<MovieDetail/>} path='movie/:id' />
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<Error/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
