import { type PropsWithChildren } from 'react';
import { useGame } from '../../../hooks/useGame';
import { type Card } from '../../../types/card';
import { centerPokeball, gameCard, gameCardBack, gameCardContainer, gameCardFront, gameCardImage } from './GameCard.css';

interface Props {
    card: Card
}

const spriteBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export const GameCard = ({ card: { id, status, pokemon } }: PropsWithChildren<Props>) => {
    const { state: { checkingMove, moveResult }, revealCard } = useGame();

    const handleClick = () => {
        if (status === 'done' || checkingMove) return;
        revealCard(id);
    };

    return (
        <div className={gameCardContainer}>
            <div
                onClick={handleClick}
                className={
                    gameCard + ' ' +
                    (status === 'done' || status === 'reveal' ? 'reveal' : '') + ' ' +
                    (moveResult === 'fail' && status === 'reveal' ? 'fail' : '') + ' ' +
                    (moveResult === 'done' && status === 'reveal' ? 'done' : '')
                }
            >
                <div
                    className={gameCardFront}
                >
                    <img
                        className={gameCardImage}
                        src={`${spriteBaseUrl}${pokemon.image}`}
                        alt={`Imagen del pokemon ${pokemon.name} en la tarjeta`}
                    />
                </div>
                <div className={gameCardBack}>
                    <div className={centerPokeball}></div>
                </div>
            </div>
        </div>
    );
};
