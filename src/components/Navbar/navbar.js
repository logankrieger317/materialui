import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavBarItems } from '../consts/navbarListItems';
import { navbarStyles } from '../styles';
import {  useNavigate } from 'react-router-dom';
import BackButton from '../CommonButton/BackButton';

const Navbar = () => {
    
    const navigate = useNavigate();

  return (
    <div>
          <Drawer
        sx={navbarStyles.drawer}
        variant="permanent"
        anchor="left"
        >
        
        <Toolbar />
        <Divider />
        <List>
        <BackButton/>
          {mainNavBarItems.map((item, index) => (
            <ListItem  
                key={item.id}
                onClick={()=>navigate(item.route)}
            >
              <ListItemButton >
                <ListItemIcon sx={navbarStyles.icons}>
                    {item.icon}
                </ListItemIcon>
                <ListItemText 
                sx={navbarStyles.item}
                primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        
      </Drawer>
    </div>
  )
}

export default Navbar