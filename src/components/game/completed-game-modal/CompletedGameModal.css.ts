import { style } from '@vanilla-extract/css';
import { vars } from '../../../App.css';

export const completedGameModalContainer = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: '#64646460',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1
});

export const completedGameModal = style({
    width: '100%',
    backgroundColor: vars.color.basic_1,
    border: `4px solid ${vars.color.basic_contrast}`,
    borderTopWidth: 0,
    alignSelf: 'flex-start',
    boxShadow: 'none',
    borderRadius: '0 0 10px 10px',
    zIndex: 2,
    '@media': {
        'screen and (min-width: 500px)': {
            borderTopWidth: '4px',
            maxWidth: '370px',
            borderRadius: 10,
            boxShadow: '2px 4px 0 0',
            alignSelf: 'flex-start',
            marginTop: '4rem'
        }
    }
});

export const completedGameModalTitle = style({
    margin: 0,
    textAlign: 'center',
    fontSize: '1.95rem'
});

export const completedGameModalBody = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '2rem 0.5rem',
    alignItems: 'center'
});

export const statsContainer = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
});

export const resultStat = style({
    margin: 0,
    fontSize: '1.5rem'
});

export const valueStat = style({
    fontWeight: 'bold'
});
