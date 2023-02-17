import { useEffect, useRef } from 'react';
import { useGame } from '../../../hooks/useGame';
import { Button } from '../../ui/button/Button';
import { ThemeButton } from '../../ui/theme-button/ThemeButton';
import { levelButton, moveStat, stat, statsContainer, statValue, timeStat, titleStat } from './StatsBanner.css';

const getTimeString = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = timeInSeconds % 60;
    const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutesStr}:${secondsStr}`;
};

export const StatsBanner = () => {
    const { state: { movesCount, gameStatus, time }, increaseTime } = useGame();

    const interval = useRef<number>();

    useEffect(() => {
        if (gameStatus === 'completed') {
            clearInterval(interval.current);
        }

        if (gameStatus === 'playing' && !interval.current) {
            interval.current = setInterval(() => {
                increaseTime();
            }, 1000);
        }

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, [gameStatus]);

    return (
        <div className={statsContainer}>
            <ThemeButton />

            <Button color='success' className={levelButton}>
                Facil
            </Button>

            <div className={[stat, moveStat].join(' ')}>
                <h5 className={titleStat}>
                    Movimientos
                </h5>
                <span className={statValue}>
                    { movesCount }
                </span>
            </div>

            <div className={[stat, timeStat].join(' ')}>
                <h5 className={titleStat}>
                    Tiempo
                </h5>
                <span className={statValue}>
                    {getTimeString(time)}
                </span>
            </div>
        </div>
    );
};
