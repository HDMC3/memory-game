import { style } from '@vanilla-extract/css';

export const gameBoardContainer = style({
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
});

export const gameBoardContainerEase = style({
    maxWidth: '480px'
});

export const gameBoardContainerMedium = style({
    maxWidth: '580px'
});

export const gameBoardContainerHard = style({
    maxWidth: '800px'
});

export const gameBoard = style({
    display: 'grid',
    justifyItems: 'center',
    gap: '1rem',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'

});
