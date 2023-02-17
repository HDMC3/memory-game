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
        <>
            {
                // eslint-disable-next-line multiline-ternary, operator-linebreak
                !open ? null :
                <div className={modalContainer} onClick={handleBackdropClick}>
                    <div className={modal}>
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
                                onClick={() => handleSelectLevel({ name: 'hard', cardsNumber: 30 })}
                                color='error'
                            >
                                Dificil
                            </Button>
                        </div>
                    </div>
                </div>
            }

        </>
    );
};
