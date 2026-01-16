import {Box, Typography, Button} from '@mui/material';
import styles from '../styles/DetailPage.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
import {useLayoutEffect} from "react";

import item1 from '../assets/Concept/item1.jpg';
import item2 from '../assets/Concept/item2.jpg';
import item3 from '../assets/Concept/item3.jpg';

export const ConceptPage = () => {
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
                <Typography variant="h3">Concept</Typography>
            </Box>
            <Box className={styles.content}>
                <Box className={styles.contentBox}>
                    <img src={item1} alt="原点回帰" className={styles.contentImg}/>
                    <Box className={styles.contentText_right}>
                        <Typography variant="h3"> ”原点回帰”</Typography>
                        <Typography variant="h6">先代が作り上げた舞台に憧れを抱いたあの日々、</Typography>
                        <Typography variant="h6">仲間と歩み絆を深めたこの居場所。</Typography>
                        <Typography variant="h6">踊り続ける僕らの原点</Typography>
                    </Box>
                </Box>
                <Box className={styles.contentBox}>
                    <Box className={styles.contentText_left}>
                        <Typography variant="h3">”心踊る”</Typography>
                        <Typography variant="h6">音と身体で空間を作り心を踊らせたその瞬間、</Typography>
                        <Typography variant="h6">再び心のままに踊るこの舞台。</Typography>
                        <Typography variant="h6">ストリートダンスの原点</Typography>
                    </Box>
                    <img src={item2} alt="心踊る" className={styles.contentImg}/>
                </Box>
                <Box className={styles.contentBox}>
                    <img src={item3} alt="画像" className={styles.contentImg}/>
                    <Box className={styles.contentText_right}>
                        <Typography variant="h3"> ”Vivace”</Typography>
                        <Typography variant="h6">仲間と共にリズムを紡ぎ、</Typography>
                        <Typography variant="h6">命の拍動までもが共鳴しあう。</Typography>
                        <Typography variant="h6">未来に向かって生き生きと進んでいく。</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export const ConceptPageMobile = () => {
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
                <Typography variant="h3">Concept</Typography>
            </Box>
            <Box className={styles.content_mobile}>
                <Box className={styles.contentBox_mobile}>
                    <img src={item1} alt="原点回帰" className={styles.contentImg_mobile}/>
                    <Box className={styles.contentText_mobile}>
                        <Typography variant="h4"> ”原点回帰”</Typography>
                        <Typography variant="h6">先代が作り上げた舞台に憧れを抱いたあの日々、</Typography>
                        <Typography variant="h6">仲間と歩み絆を深めたこの居場所。</Typography>
                        <Typography variant="h6">踊り続ける僕らの原点</Typography>
                    </Box>
                </Box>
                <Box className={styles.contentBox_mobile}>
                    <img src={item2} alt="心踊る" className={styles.contentImg_mobile}/>
                    <Box className={styles.contentText_mobile}>
                        <Typography variant="h4">”心踊る”</Typography>
                        <Typography variant="h6">音と身体で空間を作り心を踊らせたその瞬間、</Typography>
                        <Typography variant="h6">再び心のままに踊るこの舞台。</Typography>
                        <Typography variant="h6">ストリートダンスの原点</Typography>
                    </Box>
                </Box>
                <Box className={styles.contentBox_mobile}>
                    <img src={item3} alt="画像" className={styles.contentImg_mobile}/>
                    <Box className={styles.contentText_mobile}>
                        <Typography variant="h4"> ”Vivace”</Typography>
                        <Typography variant="h6">仲間と共にリズムを紡ぎ、</Typography>
                        <Typography variant="h6">命の拍動までもが共鳴しあう。</Typography>
                        <Typography variant="h6">未来に向かって生き生きと進んでいく。</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};