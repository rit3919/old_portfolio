import { Button } from "@mui/material";
import React from "react";

function ScrollButton(props) {

    const clickHandler = () => {
        document.getElementsByClassName(props.warp)[0].scrollIntoView({ behavior: "smooth" });
    }


  
        

    return (
        <>
            <Button color="inherit" component="div" sx={{ 
                    position: 'relative',
                    height: '100%',
                    fontFamily: 'Arial',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#000000',
                    textDecorationLine: 'underline',
                    textTransform: 'none',
                }} onClick={()=>clickHandler()}>
                {props.children}
                </Button>
        </>
    );
}
export default ScrollButton;