import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import '../App.css';

const BoxStyle = {
    marginTop: '3%',
    marginBottom: '3%',
    marginLeft: '2%',
    borderRadius: '10px',
    backgroundColor: '#dce5ec',
    height: '100px',
    "&:hover": {
      background: "#FFFFFF"
    },
}

function DialogTemplate(props) {
    const [open,setOpen] = React.useState(false);

        const OpenHandler = () => {
            setOpen(true);
        };

        const CloseHandler = () => {
            setOpen(false);
        };
    return (
        <>
            <Button variant="contained"  onClick={OpenHandler} sx={BoxStyle}>
                            
                <Typography sx={{ fontSize: '2rem', color: '#000000', textTransform: 'none' }} >{props.Name}</Typography>
                
            </Button>
                        <Dialog open={open} onClose={CloseHandler} maxWidth='xl' fullWidth='true'>
                    <DialogTitle sx={{fontSize:'2rem'}}>{props.Name}</DialogTitle>
                            <DialogContent>
                                {props.children}
                            </DialogContent>
                        </Dialog>
        </>
    );
}

export default DialogTemplate;