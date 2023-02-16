import { style } from '@vanilla-extract/css';

export const gameBoardContainer = style({
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '480px'
});

export const gameBoard = style({
    display: 'grid',
    justifyItems: 'center',
    gap: '1rem',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'

});
