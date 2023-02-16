import { type Pokemon } from './pokemon';

export type CardStatus = 'hidden' | 'reveal' | 'done';

export interface Card {
    id: number
    pokemon: Pokemon
    status: CardStatus
}
