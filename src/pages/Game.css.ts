import { style } from '@vanilla-extract/css';

export const gameContainer = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 0.5rem'
});

export const canvasConffeti = style({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0
});
