import { useEffect, useState } from 'react';
import { useGame } from '../../../hooks/useGame';
import { Button, type ButtonColor } from '../../ui/button/Button';
import { ThemeButton } from '../../ui/theme-button/ThemeButton';
import { GameLevelsModal } from '../game-levels-modal/GameLevelsModal';
import { levelButton, moveStat, stat, statsContainer, statValue, timeStat, titleStat } from './StatsBanner.css';

const getTimeString = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = timeInSeconds % 60;
    const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutesStr}:${secondsStr}`;
};

const levelInfo: Record<string, { text: string, color: ButtonColor }> = {
    ease: { text: 'Facil', color: 'success' },
    medium: { text: 'Medio', color: 'warning' },
    hard: { text: 'Dificil', color: 'error' }
};

export const StatsBanner = () => {
    const { state: { movesCount, gameStatus, time, level }, increaseTime } = useGame();
    const [openModal, setOpenModal] = useState(false);
    const [timerId, setTimerId] = useState(0);

    useEffect(() => {
        clearInterval(timerId);
    }, [level]);

    useEffect(() => {
        if (gameStatus === 'completed' || gameStatus === 'pending') {
            clearInterval(timerId);
        }

        if (gameStatus === 'playing') {
            const newTimerId = setInterval(() => {
                increaseTime();
            }, 1000);
            setTimerId(newTimerId);
        }

        return () => {
            if (timerId) {
                clearInterval(timerId);
            }
        };
    }, [gameStatus]);

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <div className={statsContainer}>
                <ThemeButton />

                <Button color={levelInfo[level.name].color} className={levelButton} onClick={() => setOpenModal(true)}>
                    { levelInfo[level.name].text }
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
            <GameLevelsModal open={openModal} onClose={handleCloseModal} />
        </>
    );
};
