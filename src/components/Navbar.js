import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const isSavedPage = location.pathname === '/saved';

  return (
    <div className="Navbar">
      <div className="buttons">
        <Button variant="outlined" color="primary" onClick={(e)=>{setSearch("Mumbai")}}>Mumbai</Button>
        <Button variant="outlined" color="secondary" onClick={(e)=>{setSearch("Pune")}}>Pune</Button>
        <Button variant="outlined" color="primary" onClick={(e)=>{setSearch("Delhi")}}>Delhi</Button>
        <Button variant="outlined" color="secondary" onClick={(e)=>{setSearch("Bengalore")}}>Bengaluru</Button>
        <Button variant="outlined" color="secondary" onClick={(e)=>{setSearch("Chennai")}}>Chennai</Button>
        <Button variant="outlined" color="primary" onClick={(e)=>{setSearch("jaipur")}}>Jaipur</Button>
      </div>
      <div className="Title"><i>-- TrendPixel --</i></div>
      <div className="Searchbar">
        <input placeholder="Search Here" onChange={(e) => setSearch(e.target.value || "nature")} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (isSavedPage) {
              navigate('/'); 
            } else {
              navigate('/saved'); 
            }
          }}
        >
          {isSavedPage ? 'Home' : 'Saved'} 
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
