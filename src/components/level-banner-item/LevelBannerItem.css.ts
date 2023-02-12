import { style, type ComplexStyleRule } from '@vanilla-extract/css';
import { vars } from '../../App.css';

export const cardContainer = style({
    perspective: 400
});

export const card = style({
    height: 90,
    maxWidth: 200,
    width: 90,
    position: 'relative',
    transition: 'box-shadow 0.3s, transform 0.4s 0.2s',
    transformStyle: 'preserve-3d'
});

export const cardImage = style({
    position: 'absolute',
    width: '110%',
    filter: 'drop-shadow(2px 3px 0px rgba(32, 32, 32))',
    objectFit: 'fill'
});

const cardFaceCommon: ComplexStyleRule = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box'
};

export const cardBack = style({
    ...cardFaceCommon,
    backfaceVisibility: 'hidden',
    backgroundColor: '#e5e7eb',
    border: '5px solid #CCC',
    borderRadius: 5,
    ':before': {
        content: '',
        position: 'absolute',
        borderRadius: '40px 40px 0 0',
        backgroundColor: '#f3f4f6',
        width: 50,
        height: 25,
        transform: 'translateY(-50%)'
    },
    ':after': {
        content: '',
        position: 'absolute',
        borderRadius: '0 0 40px 40px',
        backgroundColor: '#d1d5db',
        width: 50,
        height: 25,
        transform: 'translateY(50%)'
    }
});

export const cardFront = style({
    ...cardFaceCommon,
    transform: 'rotateY(180deg)',
    border: `3px solid ${vars.color.basic_contrast}`,
    borderRadius: 5
});
