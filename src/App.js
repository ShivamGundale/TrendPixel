import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from 'react';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Saved from './components/Saved';


function App() {
  const API = "gwqJvEtM5m4kW8TLGRVBcwSWoevE42gtBSAlGZomJCU9gRjJsMPLfpVd";
  const [images, setImages] = useState([])
  const [Search, setSearch] = useState("nature")
  const [saved, setsaved] = useState([]);

  useEffect(() => {
    const cityimages = async () => {
     
        const res = await axios.get(
            `https://api.pexels.com/v1/search?query=${encodeURIComponent(Search)}&per_page=500`,
          {
            headers: {
              Authorization: API,  
            },
          }
        );
        console.log(res.data);
        setImages(res.data.photos)
      
    };

    cityimages();
  }, [Search]);
  console.log("updated" , saved)

  return (
    <>
    <div className="App">
    
    
    <Router>
    <Navbar setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<MainPage images={images} saved={saved} setsaved={setsaved} />} />
        <Route path="/saved" element={<Saved saved={saved} />} />
      </Routes>
    </Router>
   
  </div>
  </>
  );
}

export default App;
