import { AnimatePresence, motion } from 'framer-motion';
import { type PropsWithChildren, useEffect, type MouseEvent } from 'react';
import { timerToString } from '../../../helpers/formaters';
import { useGame } from '../../../hooks/useGame';
import { Button } from '../../ui/button/Button';
import { completedGameModal, completedGameModalBody, completedGameModalContainer, completedGameModalTitle, resultStat, statsContainer, valueStat } from './CompletedGameModal.css';

interface Props {
    open: boolean
    onClose: () => void
}

export const CompletedGameModal = ({ open, onClose }: PropsWithChildren<Props>) => {
    const { state: { movesCount, time, level }, changeGameLevel } = useGame();
    useEffect(() => {
        document.body.style.overflowY = open ? 'hidden' : 'auto';
    }, [open]);

    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
        const { classList } = e.target as HTMLDivElement;
        if (classList.contains(completedGameModalContainer)) {
            onClose();
        }
    };

    const handleRestartClick = () => {
        onClose();
        changeGameLevel({ ...level });
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    onClick={handleBackdropClick}
                    className={completedGameModalContainer}
                    initial={{ backgroundColor: 'rgb(100, 100, 100, 0)' }}
                    animate={{
                        backgroundColor: 'rgb(100, 100, 100, 0.38)'
                    }}
                    exit={{ backgroundColor: 'rgb(100, 100, 100, 0)' }}
                >
                    <motion.div
                        className={completedGameModal}
                        initial={{ y: window.innerWidth >= 500 ? '-100%' : '100%' }}
                        animate={{
                            y: 0
                        }}
                        exit={{ y: window.innerWidth >= 500 ? '-130%' : '140%' }}
                    >
                        {/* <div className={completedGameModalHeader}>
                            <div className={completedGameModalTitle}></div>
                        </div> */}
                        <div className={completedGameModalBody}>
                            <h2 className={completedGameModalTitle}>¡Juego completado!</h2>
                            <div className={statsContainer}>
                                <p className={resultStat}>
                                    Movimientos: <span className={valueStat}>{movesCount}</span>
                                </p>
                                <p className={resultStat}>
                                    Tiempo: <span className={valueStat}>{timerToString(time)}</span>
                                </p>
                            </div>
                            <Button onClick={handleRestartClick}>
                                Reiniciar
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
