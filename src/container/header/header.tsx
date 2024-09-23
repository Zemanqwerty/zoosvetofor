import React, {FC} from "react";
import styles from './header.module.css'
import logo from '../../source/zoosvetlogo.png'
import vk from '../../source/vk.png'
import telegram from '../../source/telegram.png'
import whatsapp from '../../source/whatsapp.png'

const Header: FC = () => {

    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logoBlock}>
                    <img src={logo} alt="zoo" />
                </div>
                <ul className={styles.headerMenu}>
                    <a href="https://t.me/svetzoofor">
                        <img className={styles.menuImages} src={telegram} alt="telegram" />
                    </a>
                </ul>
            </div>
        </div>
    )
};

export default Header;