import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Movies from './components/Movies/Movies';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
    fetch('movies.json')
    .then(res=>res.json())
    .then(data=>setMovies(data))
  },[])
  let [name,setName]=useState([])
  const handleSelect=(movieName)=>{
    const newData=[...name,movieName];
    setName(newData);
  }
  const clearData=(name)=>{
    setName([])
  }
  return (
    <div className="App">
      <Header></Header>
     
      <Movies movies={movies} handleSelect={handleSelect} name={name} clearData={clearData}></Movies>

    </div>
  );
}

export default App;
