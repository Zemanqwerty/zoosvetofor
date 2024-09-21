import React, {FC} from 'react'
import styles from './content.module.css'
import help from '../../source/help.png'
import pet from '../../source/pet.png'
import basket from '../../source/basket.png'
import b5 from '../../source/b5.png'

const Content: FC = () => {
    return (
        <div className={styles.contentBlock}>
            <div className={styles.obzac}>
                <img src={help} alt="?" className={styles.images}/>
                <div className={styles.obzacText}>
                Что такое <p className={styles.greenContent}> СветЗооФор</p>? Это постоянная экономия здесь и сейчас, без уловок и условностей.
                </div>
            </div>

            <div className={styles.obzac}>
                <img src={pet} alt="?" className={styles.images}/>
                <div className={styles.obzacText}>
                Забота о ваших питомцах и ваших кошельках наша первоочередная задача. Мы предлагаем <p className={styles.greenContent}>низкие цены</p>, для того чтобы у людей стало больше возможностей кормить своего питомца более качественными кормами и лакомствами. Ведь все мы знаем, что здоровье питомца зависит от правильного выбора продуктов для животных. 
                </div>
            </div>

            <div className={styles.obzac}>
                <img src={basket} alt="?" className={styles.images}/>
                <div className={styles.obzacText}>
                Каждый покупатель дискаунтера становится участником клуба светзоофор, который дает возможность на приобретение всех зоотоваров по специальной цене <p className={styles.greenContent}>-15% от цены указанной на ценнике</p>. Правила простые: пришел, завел клубную карту, сэкономил!
                </div>
            </div>
            <img src={b5} alt="" className={styles.b5} />
        </div>
    )
}

export default Content;