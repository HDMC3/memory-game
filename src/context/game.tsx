import { createContext, useReducer, type PropsWithChildren } from 'react';
import { GameActionKind, gameReducer, type GameState, initialState, type GameLevel } from '../reducers/gameReducer';
import { type Card } from '../types/card';

interface GameContextValue {
    state: GameState
    restartMoves: () => void
    changeGameLevel: (newLevel: GameLevel) => void
    setCards: (cards: Card[]) => void
    revealCard: (cardId: number) => void
    increaseTime: () => void
}

export const GameContext = createContext<GameContextValue | undefined>(undefined);

export const GameProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    const restartMoves = () => {
        dispatch({ type: GameActionKind.RESTART_MOVES });
    };

    const changeGameLevel = (newLevel: GameLevel) => {
        dispatch({ type: GameActionKind.CHANGE_LEVEL, payload: newLevel });
    };

    const increaseTime = () => {
        dispatch({ type: GameActionKind.INCREASE_TIME });
    };

    const setCards = (cards: Card[]) => {
        dispatch({ type: GameActionKind.SET_CARDS, payload: cards });
    };

    const revealCard = (cardId: number) => {
        const { activeCard, cards } = state;

        dispatch({ type: GameActionKind.REVEAL_CARD, payload: { cardId } });

        if (!activeCard) {
            dispatch({ type: GameActionKind.SET_ACTIVE_CARD, payload: { cardId } });
            return;
        }

        dispatch({ type: GameActionKind.START_CHECKING_MOVE });

        const card = cards[cardId];

        if (activeCard.pokemon.id === card.pokemon.id) {
            dispatch({ type: GameActionKind.SET_DONE_CARDS, payload: { cardId } });
            return;
        }

        setTimeout(() => {
            dispatch({ type: GameActionKind.HIDE_CARDS });
        }, 1000);
    };

    return (
        <GameContext.Provider value={{
            state,
            restartMoves,
            changeGameLevel,
            revealCard,
            setCards,
            increaseTime
        }}
        >
            { children }
        </GameContext.Provider>
    );
};
