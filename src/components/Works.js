import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Worksdata from './DialogTemplate.js';
import './Works.css';

import Regeno_ChangeTable from '../image/Regeno/changeTable.gif';
import Regeno_reg from '../image/Regeno/reg.gif';

import '../App.css';



function Works() {
    return (
        <>
            <Box className='Works'>
                
                <Typography variant="h1">Works</Typography>
                
                <Worksdata Name='PreSkate -仮想スケート体験システム-'>
                    <Typography variant='p'sx={{ margin: '0 0 0 0', padding: '0 0 0 0'}}>高専時代に参加した第32回高専プログラミングコンテスト課題部門での作品です．HMDをかぶり，スケートを体験できるプロダクトです．コンテストの本戦に進むことができ，敢闘賞を受賞することができました．作成期間は約5ヶ月，開発人数は5人，私の役職はチームリーダーを努めました．</Typography>
                    <Typography variant="h6" sx={{ margin: '0 0 0 0', padding: '2% 0 0 0' }}>
                        技術: VSCode、Git、Unity、C#、JavaScirpt、MySQL、Express.js、PUN2
                    </Typography>
                </Worksdata>
                <Worksdata Name='LocationDraw'>
                    <Typography variant='p' sx={{ margin: '0 0 0 0', padding: '2% 0 0 0' }}>大学3年次の授業，システム創生プロジェクトで取り組んだプロジェクトです．歩いた道のりを地図に自動で書いて絵を描くことをコンセプトに作成したプロジェクトでした．制作期間は2ヶ月，開発人数は10人でした．</Typography>
                    <Typography variant='h5' sx={{ margin: '0 0 0 0', padding: '2% 0 0 0' }}>作業: GPSで地図に線を書く機能の作成．</Typography>
                    <Typography variant='h5' sx={{ margin: '0 0 0 0', padding: '2% 0 0 0' }}>技術: JavaScript</Typography>
                </Worksdata>
                <Worksdata Name='Regeno'>
                    <Typography variant='p' sx={{ margin: '0 0 0 0', padding: '2% 0 0 0' }}>
                        大学4年次の授業，システム創生プロジェクトで取り組んだプロジェクトです．私の大学の履修登録や履修確認をわかりやすくできるようにするプロジェクトでした．作成期間は約2ヶ月，開発人数は9人，私の役職はサブリーダー，フロントエンド開発のマネジメントを努めました．
                    </Typography>
                    <Typography variant='h5' sx={{margin: '0 0 0 0', padding: '2% 0 0 0' }}>作業: ReactのMaterialUIを用いた時間割表の切り替えや履修登録画面を作成しました．Ruby on RailsのAPIモードによる通信を行い，時間割表や履修登録画面を実現しています．</Typography>
                    <Typography variant='h5' sx={{ margin: '0 0 0 0', padding: '2% 0 0 0'}}>技術: Git,React,JavaScript,Ruby on Rails</Typography>
                    <Typography variant='h4' sx={{ margin: '0 0 0 0', padding: '2% 0 0 0' }}>画面例①：時間割表の切り替え</Typography>
                    <img src={Regeno_ChangeTable} alt='ChangeTable' className='gifimg'></img>
                    <Typography variant='h4' sx={{ margin: '0 0 0 0', padding: '2% 0 0 0'}}>画面例②：履修登録画面</Typography>
                    <img src={Regeno_reg} alt='Registration' className='gifimg'></img>
                </Worksdata>
            </Box>    
        </>




    );
}

export default Works;
