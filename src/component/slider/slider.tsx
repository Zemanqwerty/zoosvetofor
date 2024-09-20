import React, {FC, useState} from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import vector from '../../source/arrow1.png'
import styles from './slider.module.css'
import b1 from '../../source/b1.png'
import b2 from '../../source/b2.png'
import b3 from '../../source/b3.png'
import b4 from '../../source/b4.png'
import b5 from '../../source/b5.png'



const Slider: FC = () => {
    const [swiper, setSwiper] = useState<any>(null);

    const nextSlide = () => {
        swiper.slideNext();
    }

    const prevSlide = () => {
        swiper.slidePrev();
    }

    return (
        <>
        <Swiper
                    className=""
                    spaceBetween={50}
                    slidesPerView={1}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    >
                        <SwiperSlide className={styles.slide}>
                                   <img className={styles.sliderImg} src={b1} alt="b1" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                                    <img className={styles.sliderImg} src={b2} alt="b1" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                                    <img className={styles.sliderImg} src={b3} alt="b1" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                                    <img className={styles.sliderImg} src={b4} alt="b1" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                                    <img className={styles.sliderImg} src={b5} alt="b1" />
                        </SwiperSlide>
                    </Swiper>
                    <div className={styles.arrowBlock}>
                        <div onClick={prevSlide} className={styles.arrow}>
                            <img src={vector} alt="previous" className={styles.prevArrow}/>
                        </div>
                        <div className="">
                            
                        </div>
                        <div onClick={nextSlide} className={styles.arrow}>
                            <img src={vector} alt="next" className={styles.nextArrow}/>
                        </div>
                    </div>
        </>
    )
}

export default Slider;