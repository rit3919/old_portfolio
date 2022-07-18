import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Worksdata from './DialogTemplate.js';
import './Works.css';



function Works() {
    return (
        <>
            <Box className='Works'>
                
                <Typography variant="h1">Works</Typography>
                
                <Worksdata Name='PreSkate -仮想スケート体験システム-'>
                    <Typography variant='h5' sx={{ marginBottom: '1%'}}>作成期間:</Typography>
                    <Typography variant='h5' sx={{ marginBottom: '1%',marginLeft:'50px'}}>約5ヶ月</Typography>
                    <Typography variant="h5" sx={{marginBottom: '1%'}}>開発人数:</Typography>
                    <Typography variant='h5' sx={{ marginBottom: '1%',marginLeft:'50px'}}>5人</Typography>
                    <Typography variant="h5" sx={{marginBottom: '1%'}}>
                        作業:
                    </Typography>
                    <Typography variant='h5' sx={{ marginBottom: '1%',marginLeft:'50px'}}>チームリーダー、データサーバの作成、ゲームサーバの作成、UIの作成</Typography>
                    <Typography variant="h5" sx={{ marginBottom: '1%' }}>
                        技術:
                    </Typography>
                    <Typography variant='h5' sx={{ marginBottom: '1%',marginLeft:'50px'}}>VSCode、Git、Unity、C#、JavaScirpt、MySQL、Express.js、PUN2</Typography>
                    <Typography variant="h5" sx={{ marginBottom: '1%' }}>
                        成果:
                    </Typography>
                    <Typography variant='h5' sx={{ marginBottom: '1%', marginLeft: '50px' }}>第32回高専プログラミングコンテスト　課題部門　敢闘賞</Typography>
                    
                </Worksdata>
                
            </Box>    
        </>




    );
}

export default Works;
