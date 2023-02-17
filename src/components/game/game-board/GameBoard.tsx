import { useEffect } from 'react';
import { useGame } from '../../../hooks/useGame';
import { getRandomPokemons } from '../../../services/pokemons';
import { type Card } from '../../../types/card';
import { GameCard } from '../game-card/GameCard';
import { gameBoard, gameBoardContainer } from './GameBoard.css';

export const GameBoard = () => {
    const { state: { cards }, setCards } = useGame();

    useEffect(() => {
        getRandomPokemons(20)
            .then(pokemons => {
                const cards: Card[] = pokemons.map((pokemon, i) => {
                    return {
                        id: i,
                        pokemon,
                        status: 'hidden'
                    };
                });
                setCards(cards);
            });
    }, []);

    return (
        <div className={gameBoardContainer}>
            <div className={gameBoard}>
                {
                    cards.map((card, i) => {
                        return <GameCard
                            key={i}
                            card={card}
                        />;
                    })
                }
            </div>
        </div>
    );
};
