import {Box, Typography, Button} from '@mui/material';
import styles from '../styles/DetailPage.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
import {useLayoutEffect} from "react";

import Venue from '../assets/Access/Venue.jpg';
import Access from '../assets/Access/Access.jpg';

export const AccessPage = () => {
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
                <Typography variant="h3">Access</Typography>
            </Box>
            <Box className={styles.content}>
                <Box className={styles.contentBox}>
                    <img src={Venue} alt="Venue" className={styles.contentImg}/>
                    <Box className={styles.contentText_right}>
                        <Typography variant="h3"> CLUB CITTA'</Typography>
                        <Typography variant="h4">住所</Typography>
                        <Typography variant="h6">〒210-0023</Typography>
                        <Typography variant="h6">神奈川県川崎市川崎区小川町５−７</Typography>
                    </Box>
                </Box>
                <Box className={styles.contentBox}>
                    <Box className={styles.contentText_left}>
                        <Typography variant="h3"> アクセス</Typography>
                        <Typography variant="h6">JR川崎駅から徒歩約5分</Typography>
                        <Typography variant="h6">京急 川崎駅から徒歩約7分</Typography>
                    </Box>
                    <img src={Access} alt="Access" className={styles.contentImg}/>
                </Box>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.047258770602!2d139.6972798!3d35.5278298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860a236dad971%3A0x619e27edcd68ea63!2sCLUB%20CITTA!5e0!3m2!1sja!2sjp!4v1768453562901!5m2!1sja!2sjp"
                    allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={styles.mapBox}
                ></iframe>
            </Box>
        </Box>
    )
};

export const AccessPageMobile = () => {
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
                <Typography variant="h3">Access</Typography>
            </Box>
            <Box className={styles.content_mobile}>
                <Box className={styles.contentBox_mobile}>
                    <img src={Venue} alt="Venue" className={styles.contentImg_mobile}/>
                    <Box className={styles.contentText_mobile}>
                        <Typography variant="h4"> CLUB CITTA'</Typography>
                        <Typography variant="h5">住所</Typography>
                        <Typography variant="h6">〒210-0023</Typography>
                        <Typography variant="h6">神奈川県川崎市川崎区小川町５−７</Typography>
                    </Box>
                </Box>
                <Box className={styles.contentBox_mobile}>
                    <img src={Access} alt="Access" className={styles.contentImg_mobile}/>
                    <Box className={styles.contentText_mobile}>
                        <Typography variant="h4"> アクセス</Typography>
                        <Typography variant="h6">JR川崎駅から徒歩約5分</Typography>
                        <Typography variant="h6">京急 川崎駅から徒歩約7分</Typography>
                    </Box>
                </Box>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.047258770602!2d139.6972798!3d35.5278298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860a236dad971%3A0x619e27edcd68ea63!2sCLUB%20CITTA!5e0!3m2!1sja!2sjp!4v1768453562901!5m2!1sja!2sjp"
                    allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={styles.mapBox}
                ></iframe>
            </Box>
        </Box>
    )
};