import { useEffect, useState } from 'react';
import { getRandomPokemons } from '../../../services/pokemons';
import { GameCard } from '../game-card/GameCard';
import { gameBoard, gameBoardContainer } from './GameBoard.css';

export const GameBoard = () => {
    const [pokemons, setPokemons] = useState<any[]>([]);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getRandomPokemons(12)
            .then(pokemons => {
                setPokemons(pokemons);
            });
    }, []);

    return (
        <div className={gameBoardContainer}>
            <div className={gameBoard}>
                {
                    pokemons.map((pokemon, i) => {
                        return <GameCard key={i} imageName={pokemon.image} pokemonName={pokemon.name} />;
                    })
                }
            </div>
        </div>
    );
};
