import { useEffect } from 'react';
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
    const { changeGameLevel } = useGame();

    useEffect(() => {
        const searchString = window.location.search;
        const urlSearchParams = new URLSearchParams(searchString);
        const levelParam = urlSearchParams.get('level');

        const gameLevel: GameLevel = !levelParam || !Object.keys(gameLevels).includes(levelParam)
            ? gameLevels.ease
            : gameLevels[levelParam];

        changeGameLevel({ ...gameLevel });
    }, []);

    return (
        <div className={gameContainer}>
            <StatsBanner />
            <GameBoard />
        </div>
    );
};
