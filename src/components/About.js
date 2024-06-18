import React from 'react';
import './About.css';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



const AboutPaper = {
    width: '90%',
    height: 'auto',
    display: 'block',
    backgroundColor: '#FFFFFF',
    left: '0%',
    right: '0%',
    margin: 'auto',
    borderRadius: '30px',
};

const TypoP = {
    fontFamily: 'Arial',
    position:'relative',
    fontSize: '2rem',
    userSelect: 'none',
    display: 'block',
    marginLeft:'50px'   
}

const TypoH3 = {
    userSelect: 'none',
    display: 'block',
    position: 'relative',
    marginBottom: '10px',
};

const category = {
    marginBottom: '2%',
    marginLeft: '2%',
}

const Topcategory = {
    marginBottom: '2%',
    marginLeft: '2%',
    marginTop: '2%',
}




function About() {

    return (
        <Box className='About'>
                    
            
            <Typography variant="h1">About</Typography>
            <Paper elevation={4} sx={AboutPaper}>
            <Box className='Name' sx={Topcategory}>
                    <Typography variant="h3" sx={TypoH3}>Name</Typography>
                <Typography variant="p" sx={TypoP}>髙木　綸 / Takagi Rin</Typography>
            </Box>
            <Box></Box>
            <Box className='Belong'sx={category}>
                    <Typography variant="h3" sx={TypoH3}>Belong To</Typography>
                    <Typography variant='p' sx={TypoP}>島根大学　自然科学研究科　理工学専攻</Typography>
            </Box>
                <Box className='School' sx={category}>
                    <Typography variant="h3" sx={TypoH3}>Background</Typography>
                    <Typography variant="p" sx={TypoP}>香川高等専門学校　電気情報工学科 2022/3月卒業</Typography>
                    <Typography variant="p" sx = {TypoP}>島根大学　総合理工学部　知能情報デザイン学科　2024/3月卒業</Typography>
                    
                </Box>
                <Box className='School' sx={category}>
                    <Typography variant="h3"sx={TypoH3}>Qualification</Typography>
                    <Typography variant="p" sx={TypoP}>基本情報技術者試験  2022/6</Typography>
                    <Typography variant="p" sx={TypoP}>TOEIC 620点　2024/4</Typography>
                </Box>
            </Paper>
        </Box>
    )
}
export default About;