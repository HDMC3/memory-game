import { type Card } from '../../types/card';
import { type GameLevel } from '../../types/game-level';

export interface GameState {
    movesCount: number
    level: GameLevel
    time: number
    gameStatus: 'pending' | 'playing' | 'completed'
    checkingMove: boolean
    cards: Card[]
    activeCard: Card | null
}
