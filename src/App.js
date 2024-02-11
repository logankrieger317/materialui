import React from 'react';
import Navbar from './components/Navbar/navbar';
import  Grid  from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import CTA from '../src/components/Modals/CTA'

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
        <CTA/>
        
      </div>
      <Outlet />
    </Grid>
    <Footer />
    </>
  );
}

export default App;
