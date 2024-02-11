import React from 'react';
import Navbar from './components/Navbar/navbar';
import  Grid  from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import CTA from '../src/components/Modals/CTA'
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';

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
       <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <CTA/>
        <h1 style={{display:'flex', marginLeft:'25%', height:'25vh'}}>Welcome to My MUI Practice Dashboard!</h1>
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
      </Container>
    </React.Fragment>  
      </div>
      <Outlet />
    </Grid>
    <Footer />
    </>
  );
}

export default App;
