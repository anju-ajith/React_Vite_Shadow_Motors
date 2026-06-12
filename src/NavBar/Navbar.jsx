import './Navbar.css';
import { AppBar, Toolbar, Button,TextField,Menu,
  MenuItem} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/logo.png';
import { useState } from 'react';



function Navbar(){
   const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
     return(
  <AppBar position="static"
  sx={{
    backgroundColor: '#a19d9d',
    fontStyle:'normal'
  }}
  
  >
      <Toolbar>
        
          <img
          src={logo}
          alt="Shadow Motors"
          style={{
            width: '50px',
            height: '50px',
            marginRight: '20px'
          }}
        />

        <Button color="inherit">Home</Button>

        <Button color="inherit">Services</Button>

        <Button color="inherit">About Us</Button>
        <Button
          color="inherit"
          onClick={handleClick}
        >
          Services We Provide
        </Button>
         <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            Pre-owned Car
          </MenuItem>

 <MenuItem onClick={handleClose}>
            Rental Car
          </MenuItem>

          <MenuItem onClick={handleClose}>
            Wedding Car
          </MenuItem>
        </Menu>
        
        <Button color="inherit">Contact Us</Button>
         <TextField
          size="small"
          placeholder="Search"
          sx={{
            marginLeft: 'auto',
            backgroundColor: 'white',
            borderRadius: 1
          }}
        />
         <Button
          variant="contained"
          // startIcon={<SearchIcon />}
          sx={{ ml: 1 }}
        >
          Search
        </Button>

      </Toolbar>
    </AppBar>
     );
}
export default Navbar