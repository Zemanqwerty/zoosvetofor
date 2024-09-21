import React, {FC} from "react";
import styles from './main.module.css'
import Slider from "../../component/slider";
import Timer from '../../component/timer'
import Content from '../../component/content'


const Main: FC = () => {

    const targetDate = '2024-10-04T09:00:00';

    return (
        <div className={styles.main}>
            <Timer targetDate={targetDate} />
            <Slider />
            <Content />
        </div>
    )
}

export default Main;