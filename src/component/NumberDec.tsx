import {Box, Typography, Button} from '@mui/material';
import styles from '../styles/DetailPage.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom';
import {useLayoutEffect} from "react";

import Numbers from "../data/numbers.json";

export const NumberDec = ({id}:{id:number}) => {
    const number = Numbers.find(item => item.id === id);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!number) {
        return (
            <Box className={styles.body}>
                <Typography variant="h5" color="white">データが見つかりませんでした。</Typography>
                <Button onClick={() => navigate(-1)} sx={{color: 'white'}}>戻る</Button>
            </Box>
        );
    }

    return (
        <Box className={styles.body}>
            <Box className={styles.title} sx={{color:'white'}}>
                <Box >
                    <Button startIcon={<ArrowBackIcon fontSize={"large"} />} className={styles.backButton} onClick={()=>{navigate(-1)}} ></Button>
                </Box>
                <Typography variant="h3">M{number.id}</Typography>
            </Box>
            <Box className={styles.content}>
                <Box className={styles.numberNameBox}>
                    {number.id > 11 ? (
                        <Button startIcon={<ArrowBackIcon />} className={styles.numberButton} onClick={()=>navigate(`/numbers/${number.id-1}`)}>M{number.id-1}</Button>
                    ) :(
                        <ArrowBackIcon />
                    )}
                    <Typography variant="h2" color="white">{number.name}</Typography>
                    {number.id < 22 ? (
                        <Button endIcon={<ArrowForwardIcon />} className={styles.numberButton} onClick={()=>navigate(`/numbers/${number.id+1}`)}>M{number.id+1}</Button>
                    ) :(
                        <ArrowForwardIcon />
                    )}
                </Box>

                <img src={number.image} alt="ナンバー写真" className={styles.numberImg} />
                <Typography variant="h6" color="white">produced by &nbsp;&nbsp;&nbsp;{number.leaders}</Typography>
                <Box className={styles.categoryName}>
                    <Typography variant="h5" color="rgba(255,255,255,0.6)">Genre</Typography>
                    <Typography variant="h4">{number.genre}</Typography>
                </Box>
                <Box className={styles.categoryName}>
                    <Typography variant="h5" color="rgba(255,255,255,0.6)">Music</Typography>
                    <Box>
                        {number.music.map(item => (
                            <Typography variant="h6">{item}</Typography>
                        ))}
                    </Box>
                </Box>
                <Box className={styles.categoryName}>
                    <Typography variant="h5" color="rgba(255,255,255,0.6)">Comment</Typography>
                    <Typography variant="body1" sx={{ml:5}}>{number.desc}</Typography>
                </Box>
            </Box>
        </Box>
    )
};

export const NumberDecMobile = ({id}:{id:number}) => {
    const number = Numbers.find(item => item.id === id);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!number) {
        return (
            <Box className={styles.body}>
                <Typography variant="h5" color="white">データが見つかりませんでした。</Typography>
                <Button onClick={() => navigate(-1)} sx={{color: 'white'}}>戻る</Button>
            </Box>
        );
    }

    return (
        <Box className={styles.body}>
            <Box className={styles.title} sx={{color:'white'}}>
                <Box >
                    <Button startIcon={<ArrowBackIcon fontSize={"large"} />} className={styles.backButton} onClick={()=>{navigate(-1)}} ></Button>
                </Box>
                <Typography variant="h3">M{number.id}</Typography>
            </Box>
            <Box className={styles.content}>
                <Box className={styles.numberNameBox_mobile}>
                    {number.id > 11 ? (
                        <Button startIcon={<ArrowBackIcon />} className={styles.numberButton} onClick={()=>navigate(`/numbers/${number.id-1}`)}>M{number.id-1}</Button>
                    ) :(
                        <ArrowBackIcon />
                    )}
                    <Typography variant="h4" color="white" textAlign="center">{number.name}</Typography>
                    {number.id < 22 ? (
                        <Button endIcon={<ArrowForwardIcon />} className={styles.numberButton} onClick={()=>navigate(`/numbers/${number.id+1}`)}>M{number.id+1}</Button>
                    ) :(
                        <ArrowForwardIcon />
                    )}
                </Box>

                <img src={number.image} alt="ナンバー写真" className={styles.numberImg_mobile} />
                <Typography variant="body1" color="white">produced by &nbsp;&nbsp;&nbsp;{number.leaders}</Typography>
                <Box className={styles.categoryName_mobile}>
                    <Typography variant="body1" color="rgba(255,255,255,0.6)">Genre</Typography>
                    <Typography variant="h6">{number.genre}</Typography>
                </Box>
                <Box className={styles.categoryName_mobile}>
                    <Typography variant="body1" color="rgba(255,255,255,0.6)">Music</Typography>
                    <Box>
                        {number.music.map(item => (
                            <Typography variant="body1">{item}</Typography>
                        ))}
                    </Box>
                </Box>
                <Box className={styles.categoryName_mobile}>
                    <Typography variant="body2" color="rgba(255,255,255,0.6)">Comment</Typography>
                    <Typography variant="body2" sx={{ml:2}}>{number.desc}</Typography>
                </Box>
            </Box>
        </Box>
    )
};