import { type ComplexStyleRule, style, keyframes } from '@vanilla-extract/css';
import { vars } from '../../../App.css';

export const gameCardContainer = style({
    perspective: 400
});

const failShake = keyframes({
    '0%': { transform: 'rotateY(180deg) translateX(-10px)' },
    '20%': { transform: 'rotateY(180deg) translateX(10px)' },
    '40%': { transform: 'rotateY(180deg) translateX(-10px)' },
    '60%': { transform: 'rotateY(180deg) translateX(10px)' },
    '80%': { transform: 'rotateY(180deg) translateX(-10px)' },
    '100%': { transform: 'rotateY(180deg) translateX(0)' }
});

const failBg = keyframes({
    '0%': {
        backgroundColor: vars.color.error,
        opacity: 0.7
    },
    '100%': {
        backgroundColor: vars.color.basic_1,
        opacity: 1
    }
});

const doneBg = keyframes({
    '0%': {
        backgroundColor: vars.color.success,
        opacity: 0.7
    },
    '25%': {
        backgroundColor: vars.color.basic_1,
        opacity: 0.1
    },
    '50%': {
        backgroundColor: vars.color.success,
        opacity: 0.7
    },
    '100%': {
        backgroundColor: vars.color.basic_1,
        opacity: 1
    }
});

export const gameCard = style({
    height: 100,
    maxWidth: 200,
    width: 100,
    position: 'relative',
    transition: 'box-shadow 0.3s, transform 0.3s',
    transformStyle: 'preserve-3d',
    borderRadius: 10,
    selectors: {
        '&.reveal': {
            transform: 'rotateY(180deg)',
            boxShadow: `-2px 4px 0 0 ${vars.color.basic_contrast}`
        },
        '&.fail': {
            animation: `${failShake} 0.4s 0.3s`,
            animationTimingFunction: 'ease-in-out'
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
    border: `3px solid ${vars.color.basic_contrast}`,
    selectors: {
        '.fail &': {
            animation: `${failBg} 0.4s 0.3s`,
            animationTimingFunction: 'ease-in-out'
        },
        '.done &': {
            animation: `${doneBg} 0.4s 0.3s`,
            animationTimingFunction: 'ease-in-out'
        }
    }
});

export const gameCardImage = style({
    position: 'absolute',
    width: '100%',
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
