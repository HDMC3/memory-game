import { useEffect } from 'react';
import { useGame } from '../../../hooks/useGame';
import { getRandomPokemons } from '../../../services/pokemons';
import { type Card } from '../../../types/card';
import { GameCard } from '../game-card/GameCard';
import { gameBoard, gameBoardContainer, gameBoardContainerEase, gameBoardContainerHard, gameBoardContainerMedium } from './GameBoard.css';

const levelColumnsClasses = {
    ease: gameBoardContainerEase,
    medium: gameBoardContainerMedium,
    hard: gameBoardContainerHard
};

export const GameBoard = () => {
    const { state: { cards, level }, setCards } = useGame();

    useEffect(() => {
        getRandomPokemons(level)
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
    }, [level]);

    return (
        <div
            className={
                gameBoardContainer + ' ' +
                levelColumnsClasses[level.name]
            }
        >
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
