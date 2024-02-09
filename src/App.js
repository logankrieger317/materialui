import React from 'react';
import Navbar from './components/Navbar/navbar';
import  Grid  from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <Grid container>
      <Navbar />
      This Is The Home Screen
      <Outlet />
    </Grid>
  );
}

export default App;
