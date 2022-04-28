
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import Launch from './Launch';
import './App.css';
import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import background from "./image/hls-resized-2.webp"

const App =()=>{
  const [launches, setLaunches]= useState([]);
  const [loading, setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [launchesPerPage]=useState(6);
  const url ='https://api.spacexdata.com/v4/launches/past';

  useEffect(()=>{
      const fetchLaunch= async()=>{
          setLoading(true);
          const res= await axios.get(url);
          setLaunches(res.data);
          setLoading(false);
      }
      fetchLaunch();
  },[]);
console.log(launches);

const indexofLastLaunch = currentPage* launchesPerPage;
const indexOfFirstLaunch = indexofLastLaunch - launchesPerPage;
const currentLaunches = launches.slice(indexOfFirstLaunch, indexofLastLaunch);

const paginate=(pageNumber)=>{
  setCurrentPage(pageNumber)
}

return (
  
  <div style={{ backgroundImage: `url(${background})`,backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
  <Launch launches={currentLaunches} loading= {loading}/>
  <Pagination launchesPerPage={launchesPerPage} totalLaunches={launches.length} paginate={paginate}/>
  </div>
  
);
}

export default App;

 
