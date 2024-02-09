import React from 'react'
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { mainNavBarItems } from '../consts/navbarListItems';
import { navbarStyles } from '../styles';
import { useParams, useNavigate } from 'react-router-dom';

const Navbar = () => {
    // const { id } = useParams();
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