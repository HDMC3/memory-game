import { style } from '@vanilla-extract/css';
import { vars } from '../../../App.css';

export const themeButton = style({
    position: 'absolute',
    top: -10,
    right: -10,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `1px 2px 0 0 ${vars.color.basic_contrast}`,
    transition: 'box-shadow 0.3s, transform 0.3s',
    background: `linear-gradient(to top, ${vars.color.themeButton.bottom} 0 50%, ${vars.color.themeButton.top} 50% 100%)`,
    ':hover': {
        cursor: 'pointer'
    },
    ':active': {
        boxShadow: 'none',
        transform: 'scale(0.95)'
    },
    '::after': {
        position: 'absolute',
        content: '',
        border: `2px solid ${vars.color.themeButton.innerCircle}`,
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'white'
    }
});
