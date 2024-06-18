import React from 'react';
import Wave from "./components/Wave";
import logo from "./image/title.png";
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Works from './components/Works';
import Skills from './components/Skills';





function App() {
    return (
        <>
            <Header />
            <Box className='Top'>
                
                <Box className='wave'>
                    {/* <Wave /> */}
                </Box>
                <Box className='TopPage'>
                    {/* <div className='rect'></div> */}
                    <Box className='TitleGroup'>
                        <Typography variant='h1' className='mynameTitle'>Rin Takagi PortFolio</Typography>
                        <img src={logo} alt='logo' className='logo'></img>
                    </Box>
                </Box>
                <About/>
                <Skills/>
                <Works/>
                
            </Box>
            
            <footer className='Copyright'>

                <Typography variant='p'sx={{display:'block',textAlign: 'center',}}>&copy;2022-2024 Rin Takagi All rights reserved.</Typography>
                <Wave />
            
            </footer>
        </>




    );
}

export default App;
