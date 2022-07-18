import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import SkillData from './SkillDialog';
import './About.css';

const Title = {
    pointerEvents: 'none',
    fontFamily: "Arial",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '5rem',
    userSelect: 'none',
    marginTop: '3%'
}

const PaperStyle = {
    width: '90%',
    height: 'auto',
    display: 'block',
    backgroundColor: '#FFFFFF',
    left: '0%',
    right: '0%',
    margin: 'auto',
    borderRadius: '30px',
};

function Skills() {
    return (
        <>
            <Typography variant="h1" sx={Title}>Skill</Typography>
            <Paper className='Skill' sx={PaperStyle}>
                <Typography variant='p' sx={{fontSize: '1.5rem',display: 'block',marginLeft:'1%'}}>具体的な作品を作ったスキルにボタンがあります。</Typography>
                    
                    <SkillData Name='C++' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' alt='C++' Content='競技プログラミングで3年ほど使用。高専三年次で第30回高専プログラミングコンテストの競技部門でSiv3Dを用いたGUIを作成。' />
                    
                    <SkillData Name='C#'src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' alt='CSS' Content='高専5年次に第32回高専プログラミングコンテストの課題部門PreSkateの作成にUnityと併用して使用した。' />
                    
                    <SkillData Name='JS' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='JS' Content='高専5年次に第32回高専プログラミングコンテストの課題部門PreSkateの作成にバックエンドとして使用した。簡易的なゲームサーバとして利用するためExpress.jsとMySQLを併用し作成した。' />
          
                    <SkillData Name='React' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt='React' Content='このポートフォリオサイトを作成するために使用した。' />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='HTML' className='Icon' />
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='css' className='Icon'/>
                    
          

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='mysql' className='Icon' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt='java' className='Icon' />
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className='Icon'/>
                
          
            </Paper>
        </>
    );

}

export default Skills;