'use client'

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

const GlassyAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.2)',  // Glassy effect
  backdropFilter: 'blur(10px)',  // Blurring effect
  // No shadow
  boxShadow: 'none',
}));

const Header = () => {
  return (
    <GlassyAppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1200px', mx: "auto", width: "100%" }}>
        {/* Left: Logo */}
        <Image src="/assets/Logo.svg" alt="Logo" width={80} height={80} />

        {/* Middle: Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Link href="/" variant="body1" underline="none">
            Home
          </Link>
          <Link href="/marketplace" variant="body1" underline="none">
            Marketplace
          </Link>
        </Box>

        {/* Right: Action Buttons */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="outlined" color="inherit">
            Login
          </Button>
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </GlassyAppBar>
  );
};

export default Header;
