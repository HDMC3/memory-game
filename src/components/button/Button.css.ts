import { style } from '@vanilla-extract/css';
import { vars } from '../../App.css';

export const button = style({
    border: `3px solid ${vars.color.basic_contrast}`,
    padding: '0.5rem 1rem',
    borderRadius: 10,
    transition: 'box-shadow 0.3s, transform 0.3s',
    fontSize: '1rem',
    fontWeight: 'bold',
    boxShadow: `1px 2px 0 0 ${vars.color.basic_contrast}`,
    ':active': {
        transform: 'scale(0.95)',
        boxShadow: 'none'
    }
});
