import { type ComplexStyleRule, style } from '@vanilla-extract/css';
import { vars } from '../../../App.css';

export const gameCardContainer = style({
    perspective: 400
});

export const revealGameCard = style({
    transform: 'rotateY(180deg)'
});

export const gameCard = style({
    height: 100,
    maxWidth: 200,
    width: 100,
    position: 'relative',
    transition: 'box-shadow 0.3s 0.3s, transform 0.3s',
    transformStyle: 'preserve-3d',
    borderRadius: 10,
    selectors: {
        '&.reveal': {
            transform: 'rotateY(180deg)',
            boxShadow: `-2px 4px 0 0 ${vars.color.basic_contrast}`
        }
    }
});

export const cardFaceCommonStyles: ComplexStyleRule = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    borderRadius: 10
};

export const gameCardFront = style({
    ...cardFaceCommonStyles,
    transform: 'rotateY(180deg)',
    backgroundColor: vars.color.basic_1,
    border: `3px solid ${vars.color.basic_contrast}`
});

export const gameCardImage = style({
    position: 'absolute',
    width: '110%',
    filter: `drop-shadow(2px 3px 0px ${vars.color.basic_contrast})`,
    objectFit: 'fill'
});

export const gameCardBack = style({
    ...cardFaceCommonStyles,
    backfaceVisibility: 'hidden',
    backgroundColor: `${vars.color.basic_3}`,
    border: `3px solid ${vars.color.basic_5}`,
    ':before': {
        content: '',
        position: 'absolute',
        borderRadius: '40px 40px 0 0',
        backgroundColor: vars.color.basic_4,
        width: 50,
        height: 25,
        transform: 'translateY(-50%)',
        border: `2px solid ${vars.color.basic_5}`,
        borderBottom: `1px solid ${vars.color.basic_5}`,
        transition: 'background-color 0.4s, border-color 0.4s'
    },
    ':after': {
        content: '',
        position: 'absolute',
        borderRadius: '0 0 40px 40px',
        backgroundColor: vars.color.basic_2,
        width: 50,
        height: 25,
        transform: 'translateY(50%)',
        border: `2px solid ${vars.color.basic_5}`,
        borderTop: `1px solid ${vars.color.basic_5}`,
        transition: 'background-color 0.4s, border-color 0.4s'
    },
    selectors: {
        [`${gameCard}:hover &::before`]: {
            backgroundColor: 'red',
            borderColor: 'black'
        },
        [`${gameCard}:hover &::after`]: {
            backgroundColor: 'white',
            borderColor: 'black'
        }
    }
});

export const centerPokeball = style({
    position: 'absolute',
    backgroundColor: vars.color.basic_2,
    border: `2px solid ${vars.color.basic_5}`,
    width: 10,
    height: 10,
    borderRadius: '50%',
    zIndex: 1,
    transition: 'background-color 0.4s, border-color 0.4s',
    selectors: {
        [`${gameCard}:hover &`]: {
            borderColor: 'black',
            backgroundColor: 'white'
        }
    }
});
