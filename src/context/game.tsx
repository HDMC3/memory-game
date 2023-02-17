import { createContext, useReducer, type PropsWithChildren } from 'react';
import { GameActionKind, gameReducer, type GameState, initialState } from '../reducers/gameReducer';
import { type Card } from '../types/card';

interface GameContextValue {
    state: GameState
    increaseMoves: () => void
    restartMoves: () => void
    changeGameLevel: (newLevel: 'ease' | 'medium' | 'hard') => void
    setCards: (cards: Card[]) => void
    revealCard: (cardId: number) => void
}

export const GameContext = createContext<GameContextValue | undefined>(undefined);

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
            dispatch({ type: GameActionKind.INCREASE_MOVES });
            dispatch({ type: GameActionKind.SET_DONE_CARDS, payload: { cardId } }); // dentro de esta accion se podria establecer la carta activa a null
            dispatch({ type: GameActionKind.REMOVE_ACTIVE_CARD });
            dispatch({ type: GameActionKind.END_CHECKING_MOVE });
            return;
        }

        setTimeout(() => {
            dispatch({ type: GameActionKind.INCREASE_MOVES });
            dispatch({ type: GameActionKind.HIDE_CARDS }); // dentro de esta accion se podria establece la carta activa a null y checkingMove a false
            dispatch({ type: GameActionKind.REMOVE_ACTIVE_CARD });
            dispatch({ type: GameActionKind.END_CHECKING_MOVE });
        }, 1000);
    };

    return (
        <GameContext.Provider value={{
            state,
            increaseMoves,
            restartMoves,
            changeGameLevel,
            revealCard,
            setCards
        }}
        >
            { children }
        </GameContext.Provider>
    );
};
