import {Box, Typography, Button} from '@mui/material';
import styles from '../styles/DetailPage.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
import {useLayoutEffect} from "react";

export const CastPage = () => {
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box className={styles.body}>
            <Box className={styles.title} sx={{color:'white'}}>
                <Box >
                    <Button startIcon={<ArrowBackIcon fontSize={"large"} />} className={styles.backButton} onClick={()=>{navigate(-1)}} ></Button>
                </Box>
                <Typography variant="h3">Cast</Typography>
            </Box>
            <Box className={styles.content}></Box>
        </Box>
    )
};