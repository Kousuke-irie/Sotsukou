import {Box, Typography, Button} from '@mui/material';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot} from '@mui/lab';
import styles from '../styles/DetailPage.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CurtainsClosedIcon from '@mui/icons-material/CurtainsClosed';
import CurtainsIcon from '@mui/icons-material/Curtains';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import SpatialAudioRoundedIcon from '@mui/icons-material/SpatialAudioRounded';
import {useNavigate} from 'react-router-dom';
import {useLayoutEffect} from "react";

import Numbers_data from '../data/numbers.json';

const Numbers= [...Numbers_data].sort((a, b) => a.id - b.id);

export const TimeTablePage = () => {
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
                <Typography variant="h3">Time Table</Typography>
            </Box>
            <Box className={styles.content}>
                <Timeline className={styles.timelineContainer}>
                    <TimelineItem className={styles.timelineItem}>
                        <TimelineOppositeContent className={styles.time}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" sx={{ position:'absolute' ,top:'-50px'}}>第1回公演</Typography>
                                <Typography variant="body1">13:00</Typography>
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" sx={{ position:'absolute' ,top:'-50px'}}>第2回公演</Typography>
                                <Typography variant="body1">17:00</Typography>
                            </Box>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <CurtainsIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box className={styles.timeText}>
                                <Typography variant="h5" color="white">
                                    開場
                                </Typography>
                                <Typography variant="body1" color="white">
                                    会場にお入りいただけます
                                </Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem className={styles.timelineItem}>
                        <TimelineOppositeContent className={styles.time}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="body1">13:30</Typography>
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="body1">17:30</Typography>
                            </Box>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <SpatialAudioRoundedIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box className={styles.timeText}>
                                <Typography variant="h5" color="white">
                                    開演
                                </Typography>
                                <Typography variant="body1" color="white">
                                    Event starts
                                </Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>

                    {Numbers.map((item) => (
                        <TimelineItem className={styles.timelineItem}>
                            <TimelineOppositeContent className={styles.time}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography variant="body1">-</Typography>
                                </Box>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography variant="body1">-</Typography>
                                </Box>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                    <TimelineDot variant="outlined" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Box className={styles.timeText}>
                                    <Typography variant="h5" color="white">
                                        M{item.id}
                                    </Typography>
                                    <Button className={styles.numberButton2} onClick={()=>navigate(`/numbers/${item.id}`)}>
                                        <Typography variant="h6" color="white">
                                            {item.name}
                                        </Typography>
                                    </Button>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    ))}


                    <TimelineItem className={styles.timelineItem}>
                        <TimelineOppositeContent className={styles.time}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="body1">15:30</Typography>
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="body1">19:30</Typography>
                            </Box>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <EmojiPeopleRoundedIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box className={styles.timeText}>
                                <Typography variant="h5" color="white">
                                    終演
                                </Typography>
                                <Typography variant="body1" color="white">
                                     all contents are finished
                                </Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem className={styles.timelineItem}>
                        <TimelineOppositeContent className={styles.time}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="body1">16:00</Typography>
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="body1">20:00</Typography>
                            </Box>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <CurtainsClosedIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box className={styles.timeText}>
                                <Typography variant="h5" color="white">
                                    閉場
                                </Typography>
                                <Typography variant="body1" color="white">
                                    退場をお願いします
                                </Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>



                </Timeline>
            </Box>
        </Box>
    )
};