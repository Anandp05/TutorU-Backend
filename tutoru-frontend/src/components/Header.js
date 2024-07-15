// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: '50px', marginLeft: '330px' }} />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navLinks.map((link) => (
              <Button
                key={link.title}
                color="inherit"
                component={Link}
                to={link.path}
              >
                {link.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {navLinks.map((link) => (
            <ListItem
              button
              key={link.title}
              component={Link}
              to={link.path}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={link.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
