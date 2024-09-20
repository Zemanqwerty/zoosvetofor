import React, { useEffect, useState } from 'react';
import styles from './timer.module.css'

interface CountdownTimerProps {
  targetDate: string;
}

const Timer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [daysRemaining, setDaysRemaining] = useState<number>(0);

  useEffect(() => {
    const calculateDaysRemaining = () => {
      const now = new Date().getTime();
      const targetTime = new Date(targetDate).getTime();
      const difference = targetTime - now;
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
      setDaysRemaining(days);
    };

    // Обновляем таймер каждую секунду
    const interval = setInterval(calculateDaysRemaining, 1000);

    // Вызываем функцию сразу при монтировании компонента
    calculateDaysRemaining();

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={styles.timerBlock}>
      {daysRemaining > 0 ? (
        <p className={styles.timerText}><b>До открытия {daysRemaining} {daysRemaining === 1 ? 'день' : 'дней'}!</b></p>
      ) : (
        <p className={styles.timerText}><b>Открытие уже началось!</b></p>
      )}
    </div>
  );
};

export default Timer;