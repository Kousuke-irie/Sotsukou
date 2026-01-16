import {Box, Typography, Button} from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay, EffectCoverflow} from 'swiper/modules';
import {useNavigate} from "react-router-dom";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import styles from '../styles/Swiper.module.css'

import Numbers_data from '../data/numbers.json';

const Numbers= [...Numbers_data].sort((a, b) => a.id - b.id);

export const SwiperDec = () => {
    const navigate = useNavigate();

    return (
        <Box className={styles.swiperContainer}>
            <Swiper
                modules={[Navigation,Pagination, Autoplay, EffectCoverflow]}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                breakpoints={{
                    640 : {slidesPerView: 3},
                    1024: {slidesPerView: 3},
                }}
                loop={true}
                loopAdditionalSlides={5}
                centerInsufficientSlides={true}
                speed={600}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 20,
                    stretch:0,
                    depth:300,
                    modifier: 1.0,
                    slideShadows: true,
                }}
                navigation={true}
                pagination={{clickable:true}}
                className={styles.mySwiper}
            >
                {Numbers.map((item, index) => (
                    <SwiperSlide key={index} style={{ backgroundImage: `url(${item.image})` }} >
                        <Button className={styles.button} disableRipple onClick={()=>navigate(`/numbers/${item.id}`)}>
                            <Box className={styles.slideContent}>
                                <Typography variant="h6">M{item.id}</Typography>
                                <Typography variant="h4" sx={{mb:'2px'}}>{item.name}</Typography>
                            </Box>
                        </Button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>

    )
};