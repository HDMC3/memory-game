import { style } from '@vanilla-extract/css';
import { vars } from '../App.css';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: vars.color.basic_1,
    padding: '2rem 1rem',
    gap: '3rem',
    boxSizing: 'border-box',
    minHeight: '100vh',
    background: `linear-gradient(65deg, ${vars.color.basic_2} 0 20%, ${vars.color.basic_1} 20% 85%, ${vars.color.basic_2} 85% 100%)`
});

export const innerContainer = style({
    border: `4px solid ${vars.color.basic_contrast}`,
    maxWidth: '900px',
    width: '100%',
    boxSizing: 'border-box',
    padding: '3rem 0',
    borderRadius: 10,
    position: 'relative',
    backgroundColor: vars.color.basic_3,
    boxShadow: `2px 4px 0 0 ${vars.color.basic_contrast}`
});

export const title = style({
    textAlign: 'center',
    margin: 0,
    fontWeight: '900'
});

export const homeDescription = style({
    textAlign: 'center',
    maxWidth: '75ch',
    padding: '1rem 1rem',
    margin: '0 auto',
    fontSize: '1.5rem'
});

export const levelsContainer = style({
    display: 'flex',
    gap: '3rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '2rem 0'
});
