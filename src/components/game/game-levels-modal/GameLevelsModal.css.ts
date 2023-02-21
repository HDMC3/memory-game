import { style } from '@vanilla-extract/css';
import { vars } from '../../../App.css';

export const modalContainer = style({
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

export const modal = style({

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
            maxWidth: '300px',
            borderRadius: 10,
            boxShadow: '2px 4px 0 0',
            alignSelf: 'flex-start',
            marginTop: '4rem'
        }
    }
});

export const modalHeader = style({
    borderBottom: `4px solid ${vars.color.basic_contrast}`,
    width: '100%',
    padding: '0.75rem 0'
});

export const modalTitle = style({
    margin: 0,
    textAlign: 'center',
    fontWeight: 'bold'
});

export const modalBody = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1.5rem 0',
    alignItems: 'center'
});
