import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import './Header.css';
import Category from './ScrollButton';


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
                        
            
            
                                  
                        
            <div className='buttonGroup'>

                            

                <Category warp='About'>
                About
                </Category>
                            
                <Category warp='Skills'>
                Skills
                </Category>
                            

                <Category warp='Works'>
                Works
                </Category>

            
                            </div>
        </Toolbar>
          </AppBar>
          </ElevationScroll>
    </Box>
  );
}
