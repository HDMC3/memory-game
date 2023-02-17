import { style } from '@vanilla-extract/css';
import { vars } from '../../../App.css';

export const statsContainer = style({
    border: '4px solid',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
    maxWidth: '500px',
    width: '100%',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    padding: '0.5rem 0.5rem',
    boxShadow: `2px 4px 0 0 ${vars.color.basic_contrast}`,
    position: 'relative'
});

export const levelButton = style({
    position: 'absolute',
    top: -10,
    left: -10
});

export const stat = style({
    boxSizing: 'border-box',
    fontWeight: 'bold',
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '1.25rem',
    gap: '1rem',
    justifyContent: 'center',
    padding: '0.5rem 0.5rem',
    textAlign: 'center',
    width: '100%'
});

export const moveStat = style({
    borderBottom: '2px solid',
    paddingBottom: '1rem'
});

export const timeStat = style({
    borderTop: '2px solid',
    paddingTop: '1rem'
});

export const titleStat = style({
    display: 'flex',
    alignItems: 'center',
    margin: 0
});

export const statValue = style({
    fontFamily: 'monospace',
    fontSize: '1.1rem',
    border: `3px solid ${vars.color.basic_contrast}`,
    padding: '0.2rem 0.6rem',
    borderRadius: 5,
    fontWeight: 'bold',
    backgroundColor: vars.color.basic_4
});
