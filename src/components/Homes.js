import React, {useState, useEffect} from 'react';
import apiClient from '../services/apiClient';

export default function Homes() {
  

  const [homesState, setHomesState] = useState([]);
  
  useEffect(() => {

    const homesDataPromise = apiClient.getHomes();

    homesDataPromise.then((homesData) => setHomesState(homesData));

  }, []);

  let homes;

  homes = homesState.map((home, index) => {
    return (
      <div data-testid="home" key={index}>Home</div>
    )
  })
  console.log(homes.length)
  return (
    <div>
      {homes}
    </div>
  )
}