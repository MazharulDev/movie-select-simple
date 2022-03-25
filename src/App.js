import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Movies from './components/Movies/Movies';

function App() {
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
    fetch('movies.json')
    .then(res=>res.json())
    .then(data=>setMovies(data))
  },[])
  return (
    <div className="App">
      <Header></Header>
      <Movies movies={movies}></Movies>
      
    </div>
  );
}

export default App;
