'use client'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters variant="dense">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{ mr: 2 }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex' }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Home
              </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}></Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'right' }}
                href="https://github.com/Max-im/interview-questions"
              >
                GitHub
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}