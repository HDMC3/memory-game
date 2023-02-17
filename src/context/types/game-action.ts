import { type Card } from '../../types/card';
import { type GameLevel } from '../../types/game-level';
import { type GameActionKind } from './enums';

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
