import { createContext, useReducer, type PropsWithChildren } from 'react';
import { GameActionKind, gameReducer, initialState } from '../reducers/gameReducer';

export const GameContext = createContext({});



export const GameProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    const increaseMoves = () => {
        dispatch({ type: GameActionKind.INCREASE_MOVES });
    };

    const restartMoves = () => {
        dispatch({ type: GameActionKind.RESTART_MOVES });
    };

    const changeGameLevel = (newLevel: 'ease' | 'medium' | 'hard') => {
        dispatch({ type: GameActionKind.CHANGE_LEVEL, payload: newLevel });
    };

    return (
        <GameContext.Provider value={{
            state,
            increaseMoves,
            restartMoves,
            changeGameLevel
        }}
        >
            { children }
        </GameContext.Provider>
    );
};
