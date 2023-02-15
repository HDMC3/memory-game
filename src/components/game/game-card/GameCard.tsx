import { type PropsWithChildren } from 'react';
import { centerPokeball, gameCard, gameCardBack, gameCardContainer, gameCardFront, gameCardImage } from './GameCard.css';

interface Props {
    pokemonName: string
    imageName: string
    onReveal?: () => void
}

const spriteBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export const GameCard = ({ pokemonName, imageName }: PropsWithChildren<Props>) => {
    return (
        <div className={gameCardContainer}>
            <div className={gameCard}>
                <div className={gameCardFront}>
                    <img
                        className={gameCardImage}
                        src={`${spriteBaseUrl}${imageName}`}
                        alt={`Imagen del pokemon ${pokemonName} en la tarjeta`}
                    />
                </div>
                <div className={gameCardBack}>
                    <div className={centerPokeball}></div>
                </div>
            </div>
        </div>
    );
};
