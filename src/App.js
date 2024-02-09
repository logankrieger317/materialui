import React from 'react';
import Navbar from './components/Navbar/navbar';
import  Grid  from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Grid container style={{
        display:'flex',
        alignContent:'center',
        justifyContent:'center',
        height:'90vh',
        
        
        }}>
      
      <Navbar />

      <div style={{fontWeight:'bold', fontSize:'26px'}}>
        Please Follow
        <a href='https://github.com/logankrieger317/materialui' style={{margin:'5px'}}>
         This Link </a> 
        for the Repository
      </div>
      <Outlet />
    </Grid>
    <Footer />
    </>
  );
}

export default App;
