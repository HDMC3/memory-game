import { type Card } from '../../types/card';
import { type GameLevel } from '../../types/game-level';

export interface GameState {
    movesCount: number
    level: GameLevel
    time: number
    gameStatus: 'pending' | 'playing' | 'completed'
    checkingMove: boolean
    moveResult: 'pending' | 'fail' | 'done'
    cards: Card[]
    activeCard: Card | null
}
