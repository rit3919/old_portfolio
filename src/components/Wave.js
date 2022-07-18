import React from 'react';
import '../App.css';
import { motion } from "framer-motion/dist/framer-motion";
import { Box } from '@mui/system';

const wave1 = {
    hidden: {
        backgroundPositionX: "70%",
        opacity: 0.7,
    },
    visible: {
        backgroundPositionX: "-200%",
        zIndex: 5,
        opacity: 0.7,
        transition: {
            loop: Infinity,
            ease: "linear",
            duration: 30,
        }
    }
};

const wave2 = {
    hidden: {
        backgroundPositionX: "10%",
        opacity: 0.5,
    },
    visible: {
        backgroundPositionX: "-2000%",
        zIndex: 4,
        opacity: 0.5,
        transition: {
            loop: Infinity,
            ease: "linear",
            duration: 20,
        }
    }
};

const wave3 = {
    hidden: {
        backgroundPositionX: "-0%",
        opacity: 0.4,
    },
    visible: {
        backgroundPositionX: "-100%",

        zIndex: 3,
        opacity: 0.4,
        transition: {
            loop: Infinity,
            ease: "linear",
            duration: 10,
        }
    }
};



function Wave() {
    return (
        <Box>
            <motion.div className='BottomImg'
                variant={wave1}
                initial={wave1.hidden}
                animate={wave1.visible}
            ></motion.div>
            <motion.div className='BottomImg'
                variant={wave2}
                initial={wave2.hidden}
                animate={wave2.visible}

            /><motion.div className='BottomImg'
                variant={wave3}
                initial={wave3.hidden}
                animate={wave3.visible}

            />
            
        </Box>

    )
}

export default Wave;