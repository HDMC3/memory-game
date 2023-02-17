import { GameBoard } from '../components/game/game-board/GameBoard';
import { StatsBanner } from '../components/game/stats-banner/StatsBanner';
import { gameContainer } from './Game.css';

export const Game = () => {
    return (
        <div className={gameContainer}>
            <StatsBanner />

            <GameBoard />
        </div>
    );
};
