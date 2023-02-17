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
    INCREASE_TIME = 'INCREASE_TIME'
}

export type GameLevel =
    { name: 'ease', cardsNumber: 12 }
    | { name: 'medium', cardsNumber: 20 }
    | { name: 'hard', cardsNumber: 30 };

export interface GameState {
    movesCount: number
    level: GameLevel
    time: number
    gameStatus: 'pending' | 'playing' | 'completed'
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
        | GameActionKind.INCREASE_TIME
    }
    | { type: GameActionKind.CHANGE_LEVEL, payload: GameLevel }
    | { type: GameActionKind.REVEAL_CARD, payload: { cardId: number } }
    | { type: GameActionKind.SET_ACTIVE_CARD, payload: { cardId: number } }
    | { type: GameActionKind.SET_DONE_CARDS, payload: { cardId: number } }
;

export const initialState: GameState = {
    movesCount: 0,
    level: { name: 'medium', cardsNumber: 20 },
    time: 0,
    gameStatus: 'pending',
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

        case GameActionKind.INCREASE_TIME:
            return {
                ...state,
                time: state.time + 1
            };

        case GameActionKind.SET_CARDS:
            return {
                ...state,
                cards: action.payload
            };

        case GameActionKind.REVEAL_CARD: {
            const newGameStatus = state.movesCount === 0 ? 'playing' : state.gameStatus;
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
                }),
                gameStatus: newGameStatus
            };
        }

        case GameActionKind.SET_ACTIVE_CARD:
            return {
                ...state,
                activeCard: { ...state.cards[action.payload.cardId] }
            };

        case GameActionKind.SET_DONE_CARDS: {
            const { activeCard, movesCount, cards } = state;
            const { cardId } = action.payload;
            const newGameStatus = cards.filter(c => c.status !== 'done').length === 2
                ? 'completed'
                : state.gameStatus;

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
                checkingMove: false,
                gameStatus: newGameStatus
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
