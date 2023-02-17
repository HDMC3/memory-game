import { type Card } from '../types/card';

export const enum GameActionKind {
    RESTART_MOVES = 'RESTART_MOVES',
    CHANGE_LEVEL = 'CHANGE_LEVEL',
    SET_CARDS = 'SET_CARDS',
    REVEAL_CARD = 'REVEAL_CARD',
    SET_ACTIVE_CARD = 'SET_ACTIVE_CARD',
    SET_DONE_CARDS = 'SET_DONE_CARDS',
    HIDE_CARDS = 'HIDE_CARDS',
    START_CHECKING_MOVE = 'START_CHECKING_MOVE',
}

export interface GameState {
    movesCount: number
    level: 'ease' | 'medium' | 'hard'
    checkingMove: boolean
    cards: Card[]
    activeCard: Card | null
}

export type GameAction =
    { type: GameActionKind.SET_CARDS, payload: Card[] }
    | {
        type: GameActionKind.RESTART_MOVES
        | GameActionKind.START_CHECKING_MOVE
        | GameActionKind.HIDE_CARDS
    }
    | { type: GameActionKind.CHANGE_LEVEL, payload: 'ease' | 'medium' | 'hard' }
    | { type: GameActionKind.REVEAL_CARD, payload: { cardId: number } }
    | { type: GameActionKind.SET_ACTIVE_CARD, payload: { cardId: number } }
    | { type: GameActionKind.SET_DONE_CARDS, payload: { cardId: number } }
;

export const initialState: GameState = {
    movesCount: 0,
    level: 'ease',
    checkingMove: false,
    cards: [],
    activeCard: null
};

export const gameReducer = (state: GameState, action: GameAction): GameState => {
    switch (action.type) {
        case GameActionKind.RESTART_MOVES:
            return {
                ...state,
                movesCount: 0
            };

        case GameActionKind.CHANGE_LEVEL:
            return {
                ...state,
                level: action.payload
            };

        case GameActionKind.SET_CARDS:
            return {
                ...state,
                cards: action.payload
            };

        case GameActionKind.REVEAL_CARD:
            return {
                ...state,
                cards: state.cards.map(card => {
                    if (card.id === action.payload.cardId) {
                        return {
                            ...card,
                            status: 'reveal'
                        };
                    }
                    return card;
                })
            };

        case GameActionKind.SET_ACTIVE_CARD:
            return {
                ...state,
                activeCard: { ...state.cards[action.payload.cardId] }
            };

        case GameActionKind.SET_DONE_CARDS: {
            const { activeCard, movesCount } = state;
            const { cardId } = action.payload;

            return {
                ...state,
                cards: state.cards.map(card => {
                    if (card.id === cardId || card.id === activeCard?.id) {
                        return {
                            ...card,
                            status: 'done'
                        };
                    }

                    return card;
                }),
                movesCount: movesCount + 1,
                activeCard: null,
                checkingMove: false
            };
        }
        case GameActionKind.HIDE_CARDS:
            return {
                ...state,
                cards: state.cards.map(card => {
                    if (card.status === 'reveal') {
                        return {
                            ...card,
                            status: 'hidden'
                        };
                    }

                    return {
                        ...card
                    };
                }),
                movesCount: state.movesCount + 1,
                activeCard: null,
                checkingMove: false
            };

        case GameActionKind.START_CHECKING_MOVE:
            return {
                ...state,
                checkingMove: true
            };

        default:
            return state;
    }
};
