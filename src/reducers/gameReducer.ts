export const enum GameActionKind {
    INCREASE_MOVES = 'INCREASE_MOVES',
    RESTART_MOVES = 'RESTART_MOVES',
    CHANGE_LEVEL = 'CHANGE_LEVEL'
}

export interface GameState {
    movesCount: number
    level: 'ease' | 'medium' | 'hard'
}

export type GameAction =
    { type: GameActionKind.INCREASE_MOVES | GameActionKind.RESTART_MOVES }
    | { type: GameActionKind.CHANGE_LEVEL, payload: 'ease' | 'medium' | 'hard' };

export const initialState: GameState = {
    movesCount: 0,
    level: 'ease'
};

export const gameReducer = (state: GameState, action: GameAction): GameState => {
    switch (action.type) {
        case GameActionKind.INCREASE_MOVES:
            return {
                ...state,
                movesCount: state.movesCount + 1
            };

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

        default:
            return state;
    }
};
