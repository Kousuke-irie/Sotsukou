import {Typography,Button, Grid, Container, Paper, Box, Divider} from '@mui/material';
import styles from '../styles/Homepage.module.css';
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import type {Variants} from "framer-motion";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {ScrollReveal} from "./ScrollReveal.tsx";
import {FadeIn} from "./FadeIn.tsx";
import {ScrollBox1, ScrollBox2} from "./ScrollBox.tsx";
import {SwiperDec} from "./SwiperDec.tsx";

import {mediaQuery, useMediaQuery} from "../hooks/useMediaQuery.tsx";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const containerVariants_title: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 2.0,
        },
    },
};


const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const itemVariants_title: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 2.0, ease: "easeOut" },
    },
};

export const HomePage = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery(mediaQuery.mobile);

    return (
        <Container maxWidth={false} disableGutters>
            <Grid container direction={"column"} spacing={3} >
                <Box className={styles.titleSection}>
                    <Box
                        component={motion.div}
                        variants={itemVariants_title}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        className={styles.backgroundLayer}
                    />
                    <Box className={styles.titleWrapper}>
                        <motion.div
                            variants={containerVariants_title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={styles.stickyTitle}
                        >
                            <motion.div variants={itemVariants_title}>
                                {isMobile ? (
                                    <Typography variant={"h4"} sx={{lineHeight:1.4, fontFamily:"'Shippori Mincho', serif", color: 'white', textAlign: 'center'}}>
                                        卒業公演 <span style={{ fontFamily: "'Tangerine', cursive", fontSize: '1.5em' }}>Vivace</span>
                                    </Typography>
                                ) : (
                                    <Typography variant={"h3"} sx={{lineHeight:1.4, fontFamily:"'Shippori Mincho', serif", color: 'white', textAlign: 'center'}}>
                                        卒業公演 <span style={{ fontFamily: "'Tangerine', cursive", fontSize: '1.5em' }}>Vivace</span>
                                    </Typography>
                                )}

                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <Typography variant={"h6"} sx={{fontSize:'20px', color: 'white', textAlign: 'center'}}>
                                    presented by Wish 44th
                                </Typography>
                            </motion.div>
                        </motion.div>
                    </Box>

                    <Box className={styles.infoSection}>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant={"body1"} sx={{fontSize:'20px', color: 'white', textAlign: 'center', mb:'20px'}}>
                                2026.3.7 @Club Citta'
                            </Typography>
                            <Grid sx={{display:"flex", justifyContent:"center", gap: 2}}>
                                <Paper elevation={0} className={styles.titlePaper}>
                                    <Typography>第1回公演</Typography>
                                    <Typography>開場 13:00</Typography>
                                    <Typography>開演 13:30</Typography>
                                </Paper>
                                <Divider sx={{border:'1px solid white'}}/>
                                <Paper elevation={0} className={styles.titlePaper}>
                                    <Typography>第2回公演</Typography>
                                    <Typography>開場 17:00</Typography>
                                    <Typography>開演 17:30</Typography>
                                </Paper>
                            </Grid>
                        </motion.div>
                    </Box>
                </Box>

                <Box sx={{py: 50}}>
                    <Grid container direction="column" spacing={20}>
                        <Box sx={{position: 'relative', width: {xs:'85%', md:'70%'}, mb: 10, ml:'auto'}}>
                            <ScrollReveal direction={"right"} >
                                <Typography variant={"h1"} className={styles.contentNameLeft} sx={{fontFamily: "'Tangerine', cursive"}}>Concept</Typography>
                            </ScrollReveal>
                            <FadeIn>
                                <Paper elevation={0} className={`${styles.componentBox} ${styles.conceptBox}`} sx={{backgroundColor: 'transparent'}}>
                                    <Box sx={{display:'flex', mt: 'auto', mb: 4, ml: 6}}>
                                        <Button endIcon={<ChevronRightIcon/>} className={styles.contentButton} onClick={()=>navigate('/concept')}></Button>
                                    </Box>
                                </Paper>
                            </FadeIn>
                        </Box>
                        <Box sx={{position: 'relative', width: {xs:'85%', md:'70%'}, mb: 10, mr:'auto'}}>
                            <ScrollReveal direction={"left"} >
                                <Typography variant={"h1"} className={styles.contentNameRight} sx={{fontFamily: "'Tangerine', cursive"}}>History</Typography>
                            </ScrollReveal>
                            <FadeIn>
                                <Paper elevation={0} className={`${styles.componentBox} ${styles.historyBox}`} sx={{backgroundColor: 'transparent'}}>
                                    <Box sx={{display:'flex', mt: 'auto', mb: 4, mr: 6, justifyContent: "flex-end"}}>
                                        <Button endIcon={<ChevronRightIcon/>} className={styles.contentButton} onClick={()=>navigate('/history')}></Button>
                                    </Box>
                                </Paper>
                            </FadeIn>
                        </Box>
                        <Box sx={{position: 'relative', width: {xs:'85%', md:'70%'}, mb: 10, ml:'auto'}}>
                            <ScrollReveal direction={"right"} >
                                <Typography variant={"h1"} className={styles.contentNameLeft} sx={{fontFamily: "'Tangerine', cursive"}}>Cast</Typography>
                            </ScrollReveal>
                            <FadeIn>
                                <Paper elevation={0} className={`${styles.componentBox} ${styles.castBox}`} sx={{backgroundColor: 'transparent'}}>
                                    <Box sx={{display:'flex', mt: 'auto', mb: 4, ml: 6}}>
                                        <Button endIcon={<ChevronRightIcon/>} className={styles.contentButton} onClick={()=>navigate('/cast')}></Button>
                                    </Box>
                                </Paper>
                            </FadeIn>
                        </Box>
                        <Box sx={{position: 'relative', width: '100%', mb: 10}}>
                            <ScrollReveal direction={"up"} >
                                <Grid container direction="row" sx={{justifyContent: "space-around"}}>
                                    {isMobile ? (
                                        <>
                                            <Typography variant={"h1"} className={styles.contentNameCenter_mobile} sx={{fontFamily: "'Tangerine', cursive"}}>Numbers</Typography>
                                        </>
                                    ) : (
                                        <>
                                            <Divider sx={{border: '1px solid white', width:'30%'}} />
                                            <Typography variant={"h1"} className={styles.contentNameCenter} sx={{fontFamily: "'Tangerine', cursive"}}>Numbers</Typography>
                                            <Divider sx={{border: '1px solid white', width:'30%'}} />
                                        </>
                                    )}
                                </Grid>
                            </ScrollReveal>
                            <FadeIn>
                                <Paper elevation={0} className={styles.numberBox} >
                                    <SwiperDec />
                                    <Button endIcon={<ChevronRightIcon/>} onClick={()=>navigate('/numbers')} className={styles.infoButton} sx={{mb:'30px'}} >すべてのナンバーを見る</Button>
                                </Paper>
                            </FadeIn>
                        </Box>

                        {isMobile ? (
                            <Box sx={{display: 'flex', flexDirection: 'row',justifyContent:'flex-end', bgcolor: 'transparent', height:'600px', width:'100%',position:'relative'}}>
                                <Box className={styles.scrollImg_left_mobile}>
                                </Box>
                                <motion.div variants={containerVariants} viewport={{once: true, amount: 0.5}} initial="hidden" whileInView="visible" className={styles.textBox_right_mobile}>
                                    <motion.div variants={itemVariants} style={{width:'100%', display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                                        <Typography variant="h3" sx={{ color: 'white', mb: 2, fontFamily: "'Tangerine', cursive" }}>
                                            Time Table
                                        </Typography>
                                        <Button endIcon={<ChevronRightIcon/>} className={styles.infoButton_mobile} sx={{mr:'5px'}} onClick={()=>navigate('/timetable')}>More</Button>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className={styles.textBox}>
                                        <Typography variant="h5">第1回公演</Typography>
                                        <Typography>開場 &nbsp; &nbsp; &nbsp;13:00</Typography>
                                        <Typography>開演 &nbsp; &nbsp; &nbsp;13:30</Typography>
                                        <Typography variant="h5">第2回公演</Typography>
                                        <Typography>開場 &nbsp; &nbsp; &nbsp;17:00</Typography>
                                        <Typography>開演 &nbsp; &nbsp; &nbsp;17:30</Typography>
                                    </motion.div>
                                </motion.div>
                            </Box>

                            ) : (
                            <Box sx={{display: 'flex', flexDirection: 'row', bgcolor: 'transparent', overflow: 'hidden',height:'600px', width:'100%'}}>
                                <Box sx={{ width: '50%'}}>
                                    <ScrollBox1 />
                                </Box>
                                <motion.div variants={containerVariants} viewport={{once: true, amount: 0.5}} initial="hidden" whileInView="visible" className={styles.textBox_right}>
                                    <motion.div variants={itemVariants} style={{width:'100%', display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                                        <Typography variant="h2" sx={{ color: 'white', mb: 2, fontFamily: "'Tangerine', cursive" }}>
                                            Time Table
                                        </Typography>
                                        <Button endIcon={<ChevronRightIcon/>} className={styles.infoButton} sx={{mr:'10px'}} onClick={()=>navigate('/timetable')}>More Information</Button>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className={styles.textBox}>
                                        <Typography variant="h5">第1回公演</Typography>
                                        <Typography>開場 &nbsp; &nbsp; &nbsp;13:00</Typography>
                                        <Typography>開演 &nbsp; &nbsp; &nbsp;13:30</Typography>
                                        <Typography variant="h5">第2回公演</Typography>
                                        <Typography>開場 &nbsp; &nbsp; &nbsp;17:00</Typography>
                                        <Typography>開演 &nbsp; &nbsp; &nbsp;17:30</Typography>
                                    </motion.div>
                                </motion.div>
                            </Box>
                        )}

                        {isMobile ? (
                            <Box sx={{display: 'flex', flexDirection: 'row', bgcolor: 'transparent', height:'600px', width:'100%', position:'relative'}}>
                                <motion.div variants={containerVariants} viewport={{once: true, amount: 0.5}} initial="hidden" whileInView="visible" className={styles.textBox_left_mobile}>
                                    <motion.div variants={itemVariants} style={{width:'100%', display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                                        <Button startIcon={<ChevronLeftIcon/>} className={styles.infoButton} sx={{ml:'10px'}} onClick={()=>navigate('/access')}>More</Button>
                                        <Typography variant="h2" sx={{ color: 'white', mb: 2, fontFamily: "'Tangerine', cursive" }}>
                                            Access
                                        </Typography>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className={styles.textBox}>
                                        <Typography variant="h5">CLUB CITTA'</Typography>
                                        <Typography variant="h6">住所</Typography>
                                        <Typography variant="body1">〒210-0023 神奈川県川崎市川崎区小川町５−７</Typography>
                                        <Typography variant="h6">アクセス</Typography>
                                        <Typography variant="body1">JR川崎駅から徒歩約5分</Typography>
                                        <Typography variant="body1">京急 川崎駅から徒歩約7分</Typography>
                                    </motion.div>
                                </motion.div>
                                <Box className={styles.scrollImg_right_mobile}>
                                </Box>
                            </Box>
                        ):(
                            <Box sx={{display: 'flex', flexDirection: 'row', bgcolor: 'transparent', overflow: 'hidden',height:'600px', width:'100%'}}>
                                <motion.div variants={containerVariants} viewport={{once: true, amount: 0.5}} initial="hidden" whileInView="visible" className={styles.textBox_left}>
                                    <motion.div variants={itemVariants} style={{width:'100%', display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                                        <Button startIcon={<ChevronLeftIcon/>} className={styles.infoButton} sx={{ml:'10px'}} onClick={()=>navigate('/access')}>More Information</Button>
                                        <Typography variant="h2" sx={{ color: 'white', mb: 2, fontFamily: "'Tangerine', cursive" }}>
                                            Access
                                        </Typography>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className={styles.textBox}>
                                        <Typography variant="h4">CLUB CITTA'</Typography>
                                        <Typography variant="h5">住所</Typography>
                                        <Typography>〒210-0023 神奈川県川崎市川崎区小川町５−７</Typography>
                                        <Typography variant="h5">アクセス</Typography>
                                        <Typography>JR川崎駅から徒歩約5分</Typography>
                                        <Typography>京急 川崎駅から徒歩約7分</Typography>
                                    </motion.div>
                                </motion.div>
                                <Box sx={{ width: '50%'}}>
                                    <ScrollBox2 />
                                </Box>
                            </Box>
                        )}

                    </Grid>
                </Box>
            </Grid>
        </Container>
    )
};