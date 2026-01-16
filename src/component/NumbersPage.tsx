import {Box, Typography, Button} from '@mui/material';
import style from '../styles/DetailPage.module.css';
import styles from '../styles/NumbersPage.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
import {useLayoutEffect} from "react";

import Numbers_data from '../data/numbers.json';

const Numbers= [...Numbers_data].sort((a, b) => a.id - b.id);

export const NumbersPage = () => {
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box className={style.body}>
            <Box className={style.title} sx={{color:'white'}}>
                <Box >
                    <Button startIcon={<ArrowBackIcon fontSize={"large"} />} className={style.backButton} onClick={()=>{navigate(-1)}} ></Button>
                </Box>
                <Typography variant="h3">Numbers</Typography>
            </Box>
            <Box>
                <Box className={styles.gridContainer}>
                    {Numbers.map((item) => (
                        <Box
                            key={item.id}
                            className={styles.card}
                            onClick={() => navigate(`/numbers/${item.id}`)}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={item.image} alt={item.name} loading="lazy" />
                                <div className={styles.overlay} />
                            </div>
                            <div className={styles.content}>
                                <Typography variant="h3" className={styles.numberId}>M{item.id}</Typography>
                                <div className={styles.textGroup}>
                                    <Typography variant="h6" className={styles.numberName}>{item.name}</Typography>
                                    <Typography variant="subtitle1" className={styles.genre}>{item.genre}</Typography>
                                </div>
                            </div>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
};