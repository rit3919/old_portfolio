import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import './About.css'

const SkillButton = {
    marginLeft: '2%',
    marginBottom: '3.5%',
    width: '200px',
    backgroundColor: '#dce5ec',
    borderRadius: '10px',
} 

function SkillDialog(props) {

        const [open,setOpen] = React.useState(false);

        const OpenHandler = () => {
            setOpen(true);
        };

        const CloseHandler = () => {
            setOpen(false);
        };
    
    return (
        <>
            <Button variant=""  onClick={OpenHandler} sx={SkillButton}>
                        <img src={props.src} alt={props.alt} className='MainSkillIcon' />
                <Typography sx={{ fontSize: '2rem', color: '#000000', textTransform:'none'}} >{props.Name}</Typography>
            </Button>
                    <Dialog open={open} onClose={CloseHandler}>
                <DialogTitle>{props.Name}</DialogTitle>
                        <DialogContent>
                            {props.Content}
                        </DialogContent>
                    </Dialog>
        </>
    )
}

export default SkillDialog;