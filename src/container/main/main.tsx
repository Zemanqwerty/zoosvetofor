import React, {FC} from "react";
import styles from './main.module.css'
import Slider from "../../component/slider";
import Timer from '../../component/timer'
import Content from '../../component/content'
import Footer from '../footer'


const Main: FC = () => {

    const targetDate = '2024-10-03T23:59:59';

    return (
        <div className={styles.main}>
            <Timer targetDate={targetDate} />
            <Slider />
            <Content />
            <Footer />
        </div>
    )
}

export default Main;