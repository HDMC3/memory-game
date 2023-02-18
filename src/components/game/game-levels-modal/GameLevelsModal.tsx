import { AnimatePresence, motion } from 'framer-motion';
import { type MouseEvent, useEffect } from 'react';
import { useGame } from '../../../hooks/useGame';
import { type GameLevel } from '../../../types/game-level';
import { Button } from '../../ui/button/Button';
import { modal, modalBody, modalContainer, modalHeader, modalTitle } from './GameLevelsModal.css';

interface Props {
    open: boolean
    onClose: () => void
}

export const GameLevelsModal = ({ open, onClose }: Props) => {
    const { changeGameLevel } = useGame();

    useEffect(() => {
        document.body.style.overflowY = open ? 'hidden' : 'auto';
    }, [open]);

    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
        const { classList } = e.target as HTMLDivElement;
        if (classList.contains(modalContainer)) {
            onClose();
        }
    };

    const handleSelectLevel = (newLevel: GameLevel) => {
        changeGameLevel(newLevel);
        onClose();
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className={modalContainer} onClick={handleBackdropClick}
                    initial={{ backgroundColor: 'rgb(100, 100, 100, 0)' }}
                    animate={{
                        backgroundColor: 'rgb(100, 100, 100, 0.38)'
                    }}
                    exit={{ backgroundColor: 'rgb(100, 100, 100, 0)' }}
                >
                    <motion.div
                        className={modal}
                        initial={{ y: window.innerWidth >= 500 ? '-100%' : '100%' }}
                        animate={{
                            y: 0
                        }}
                        exit={{ y: window.innerWidth >= 500 ? '-130%' : '140%' }}
                    >
                        <div className={modalHeader}>
                            <h2 className={modalTitle}>Selecciona dificultad</h2>
                        </div>
                        <div className={modalBody}>
                            <Button
                                onClick={() => handleSelectLevel({ name: 'ease', cardsNumber: 12 })}
                                color='success'
                            >
                                Facil
                            </Button>

                            <Button
                                onClick={() => handleSelectLevel({ name: 'medium', cardsNumber: 20 })}
                                color='warning'
                            >
                                Medio
                            </Button>

                            <Button
                                onClick={() => handleSelectLevel({ name: 'hard', cardsNumber: 28 })}
                                color='error'
                            >
                                Dificil
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}

        </AnimatePresence>
    );
};
