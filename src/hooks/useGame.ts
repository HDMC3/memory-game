import { useContext } from 'react';
import { GameContext } from '../context/game';

export const useGame = () => {
    const context = useContext(GameContext);

    if (context === undefined) {
        throw new Error('useGame must be used within a GameProvider');
    }

    return context;
};
