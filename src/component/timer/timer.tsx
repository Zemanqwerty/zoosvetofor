import React, { useEffect, useState } from 'react';
import styles from './timer.module.css';

interface CountdownTimerProps {
  targetDate: string;
}

const Timer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<{ days: number, hours: number, minutes: number, seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const targetTime = new Date(targetDate).getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Обновляем таймер каждую секунду
    const interval = setInterval(calculateTimeRemaining, 1000);

    // Вызываем функцию сразу при монтировании компонента
    calculateTimeRemaining();

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, [targetDate]);

  const getDeclension = (number: number, words: string[]) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  };

  const { days, hours, minutes, seconds } = timeRemaining;

  const daysWord = getDeclension(days, ['день', 'дня', 'дней']);
  const hoursWord = getDeclension(hours, ['час', 'часа', 'часов']);
  const minutesWord = getDeclension(minutes, ['минута', 'минуты', 'минут']);
  const secondsWord = getDeclension(seconds, ['секунда', 'секунды', 'секунд']);

  return (
    <div className={styles.timerBlock}>
      {days > 0 || hours > 0 || minutes > 0 || seconds > 0 ? (
        <p className={styles.timerText}>
          <b>До открытия: {days} {daysWord}, {hours} {hoursWord}, {minutes} {minutesWord}, {seconds} {secondsWord}!</b>
        </p>
      ) : (
        <p className={styles.timerText}><b>Открытие уже началось!</b></p>
      )}
    </div>
  );
};

export default Timer;