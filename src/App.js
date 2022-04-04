import './App.css';
import React, { useEffect, useState } from "react";
import Loading from './load'
import Dogs from './Dogs'
const url = 'https://dog-adopt-api.herokuapp.com/dogs';

function App() {
  const [loading, setLoading] = useState(true);
  const [dogs, setDogs] = useState([])


const removeDog = (id) =>{
  const newDogs = dogs.filter((dog) => dog.id !==id);
  setDogs(newDogs);
};

  const fetchDogs = async () => {
    setLoading(true)
    
    try{
      const datas = await fetch(url);
      const dogs = await datas.json();
      setLoading(false);
      setDogs(dogs);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }

    
  };
  useEffect(() => {
    fetchDogs();
  }, []);


  if (loading) {
    return <div>
      <Loading/>
    </div>
  } if (dogs.length === 0) {
    return <div className='page'>
      <h1>No Dogs Left</h1>
      <button className='refresh' onClick={(fetchDogs)}>Refresh</button>
    </div>
  }

  return (    
    <div className='page'>
      <Dogs dogs={dogs} removeDog={removeDog}/>
    </div>
  );
}

export default App;
