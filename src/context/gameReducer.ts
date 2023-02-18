import { GameActionKind } from './types/enums';
import { type GameAction } from './types/game-action';
import { type GameState } from './types/game-state';

export const initialState: GameState = {
    movesCount: 0,
    level: { name: 'medium', cardsNumber: 20 },
    time: 0,
    gameStatus: 'pending',
    checkingMove: false,
    moveResult: 'pending',
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
                ...initialState,
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
                gameStatus: newGameStatus,
                moveResult: 'pending'
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
                checkingMove: false,
                moveResult: 'pending'
            };

        case GameActionKind.START_CHECKING_MOVE:
            return {
                ...state,
                checkingMove: true
            };

        case GameActionKind.MARK_MOVE_TO_FAIL:
            return {
                ...state,
                moveResult: 'fail'
            };

        case GameActionKind.MARK_MOVE_TO_DONE:
            return {
                ...state,
                moveResult: 'done'
            };

        default:
            return state;
    }
};
