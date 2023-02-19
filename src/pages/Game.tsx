import { useEffect, useState } from 'react';
import { CompletedGameModal } from '../components/game/completed-game-modal/CompletedGameModal';
import { GameBoard } from '../components/game/game-board/GameBoard';
import { StatsBanner } from '../components/game/stats-banner/StatsBanner';
import { useGame } from '../hooks/useGame';
import { type GameLevel } from '../types/game-level';
import { gameContainer } from './Game.css';

const gameLevels: Record<string, GameLevel> = {
    ease: { name: 'ease', cardsNumber: 12 },
    medium: { name: 'medium', cardsNumber: 20 },
    hard: { name: 'hard', cardsNumber: 28 }
};

export const Game = () => {
    const { state: { gameStatus }, changeGameLevel } = useGame();
    const [modalOpen, setModalOpen] = useState(true);

    useEffect(() => {
        const searchString = window.location.search;
        const urlSearchParams = new URLSearchParams(searchString);
        const levelParam = urlSearchParams.get('level');

        const gameLevel: GameLevel = !levelParam || !Object.keys(gameLevels).includes(levelParam)
            ? gameLevels.ease
            : gameLevels[levelParam];

        changeGameLevel({ ...gameLevel });
    }, []);

    useEffect(() => {
        if (gameStatus === 'completed') {
            setModalOpen(true);
        }
    }, [gameStatus]);

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={gameContainer}>
            <StatsBanner />
            <GameBoard />
            <CompletedGameModal open={modalOpen} onClose={handleCloseModal} />
        </div>
    );
};
