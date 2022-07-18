import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo from './../image/title.png';
import './Header.css';



function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

    return (
      React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
  })
      
  );
}



export default function ButtonAppBar(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ElevationScroll {...props}>
                <AppBar position="fixed" sx={{
                        backgroundColor: '#Fdfdfb',
                        
                    }}>
        <Toolbar component="div">
            <img src={logo} alt='logo' className='logo2' />
            <div className='buttonGroup'>
                <Button color="inherit" component="div" sx={{ 
                    position: 'relative',
                    height: '100%',
                    fontFamily: 'Arial',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#000000',
                    textDecorationLine: 'underline',
                    textTransform: 'none',
                }}>
                About
                </Button>
                <Button color="inherit" component="div" sx={{
                    fontFamily: ['Arial'],
                    position: 'relative',
                    height: '100%',     
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#000000',
                    textDecorationLine: 'underline',
                    textTransform: 'none',
                }}>Skills
                </Button>

            <Button color="inherit" component="div" sx={{
                fontFamily: 'Arial',
                fontSize: '2rem',
                height: '100%',
                position: 'relative',        
                fontWeight: 'bold',
                color: '#000000',
                textDecorationLine: 'underline',
                textTransform: 'none',
            }}>Works
                            </Button>
                            </div>
        </Toolbar>
          </AppBar>
          </ElevationScroll>
    </Box>
  );
}
