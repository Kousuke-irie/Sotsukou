import {Box, Typography, Button} from '@mui/material';
import styles from '../styles/DetailPage.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
import {useLayoutEffect} from "react";

import item1 from '../assets/History/item1.jpg';
import item2 from '../assets/History/item2.jpg';
import item3 from '../assets/History/item3.jpg';

export const HistoryPage = () => {
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
                <Typography variant="h3">History</Typography>
            </Box>
            <Box className={styles.content}>
                <Box className={styles.contentBox}>
                    <img src={item1} alt="画像" className={styles.contentImg}/>
                    <Box className={styles.contentText_right}>
                        <Typography variant="h3"> What's "WISH" ？</Typography>
                        <Typography variant="h6">東京大学所属のストリートダンスサークルであり、その規模は合計150人にも及ぶ。</Typography>
                        <Typography variant="h6">年に一度、総制作費1,000万円規模のダンス単独公演を、企画から演出、運営に至るまで、文字通り「ゼロから」作り上げる。</Typography>
                        <Typography variant="h6">連綿と続くその歴史は今年で47年目に突入した。</Typography>
                    </Box>
                </Box>
                <Box className={styles.contentBox}>
                    <Box className={styles.contentText_left}>
                        <Typography variant="h3">What's "卒業公演"？</Typography>
                        <Typography variant="h6">現役生のみならず、歴史を築いてきたOB・OGたちが一同に介する公演。</Typography>
                        <Typography variant="h6">10世代におよぶダンサーたちが同じステージに立ち、それぞれの時代が培ってきたスキルとパッションをぶつけ合う。</Typography>
                        <Typography variant="h6">過去と未来を繋ぎ、最高の瞬間を共有する”公演”</Typography>
                    </Box>
                    <img src={item2} alt="画像" className={styles.contentImg}/>
                </Box>
                <Box className={styles.contentBox}>
                    <img src={item3} alt="画像" className={styles.contentImg}/>
                    <Box className={styles.contentText_right}>
                        <Typography variant="h6">歴史を紡ぐ。</Typography>
                        <Typography variant="h6">新しい価値を創る。</Typography>
                        <Typography variant="h6">”WISH”の歴史は”卒業公演”と共に続いていく。</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export const HistoryPageMobile = () => {
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
                <Typography variant="h3">History</Typography>
            </Box>
            <Box className={styles.content_mobile}>
                <Box className={styles.contentBox_mobile}>
                    <img src={item1} alt="画像" className={styles.contentImg_mobile}/>
                    <Box className={styles.contentText_mobile}>
                        <Typography variant="h5"> What's "WISH" ？</Typography>
                        <Typography variant="body1">東京大学所属のストリートダンスサークルであり、その規模は合計150人にも及ぶ。</Typography>
                        <Typography variant="body1">年に一度、総制作費1,000万円規模のダンス単独公演を、企画から演出、運営に至るまで、文字通り「ゼロから」作り上げる。</Typography>
                        <Typography variant="body1">連綿と続くその歴史は今年で47年目に突入した。</Typography>
                    </Box>
                </Box>
                <Box className={styles.contentBox_mobile}>
                    <img src={item2} alt="画像" className={styles.contentImg_mobile}/>
                    <Box className={styles.contentText_mobile}>
                        <Typography variant="h5">What's "卒業公演"？</Typography>
                        <Typography variant="body1">現役生のみならず、歴史を築いてきたOB・OGたちが一同に介する公演。</Typography>
                        <Typography variant="body1">10世代におよぶダンサーたちが同じステージに立ち、それぞれの時代が培ってきたスキルとパッションをぶつけ合う。</Typography>
                        <Typography variant="body1">過去と未来を繋ぎ、最高の瞬間を共有する”公演”</Typography>
                    </Box>
                </Box>
                <Box className={styles.contentBox_mobile}>
                    <img src={item3} alt="画像" className={styles.contentImg_mobile}/>
                    <Box className={styles.contentText_mobile}>
                        <Typography variant="h6">歴史を紡ぐ。</Typography>
                        <Typography variant="h6">新しい価値を創る。</Typography>
                        <Typography variant="h6">”WISH”の歴史は”卒業公演”と共に続いていく。</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};