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
  let [name,setName]=useState([])
  const handleSelect=(movieName)=>{
    const exists=name.find(movie=>movie.id===movieName.id);
    if(!exists){
      const newData=[...name,movieName];
      setName(newData);
    }else(
      alert('item already added')
    )
   
  }
  const handleRemoveFromCart=(movieName)=>{
    const rest=name.filter(movie=>movie.id !==movieName.id)
    setName(rest)
  }
  const clearData=(name)=>{
    setName([])
    setRandomData([])
  }
  const [randomData,setRandomData]=useState([])
  const randomMovie=()=>{
    let item= name[Math.floor(Math.random()*name.length)];
    setRandomData(item)
  }
  return (
    <div className="App">
      <Header></Header>
     
      <Movies handleRemoveFromCart={handleRemoveFromCart} movies={movies} handleSelect={handleSelect} name={name} count={name.length} clearData={clearData} randomMovie={randomMovie} randomData={randomData}></Movies>
    
    </div>
  );
}

export default App;
