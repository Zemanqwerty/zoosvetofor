import React, {FC} from 'react'
import styles from './footer.module.css'
import logo from '../../source/zoosvetlogo.png';
import vk from '../../source/vk.png'
import telegram from '../../source/telegram.png'
import whatsapp from '../../source/whatsapp.png'


const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <img src={logo} alt="zoo" className={styles.footerLogo} />
                <ul className={styles.headerMenu}>
                    <a href='https://t.me/svetzoofor'>
                        <img className={styles.menuImages} src={telegram} alt="telegram" />
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Footer;