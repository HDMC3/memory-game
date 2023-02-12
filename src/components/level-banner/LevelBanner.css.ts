import { style } from '@vanilla-extract/css';
import { vars } from '../../App.css';

export const levelBannerContainer = style({
    border: `4px solid ${vars.color.basic_contrast}`,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: vars.color.basic_1
});

export const levelBannerTitle = style({
    margin: 0,
    padding: '0.5rem 0',
    textAlign: 'center',
    width: '100%',
    borderBottom: `4px solid ${vars.color.basic_contrast}`
});

export const itemsContainer = style({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: '0.7rem',
    padding: '1rem',
    columnGap: '1.5rem'
});

export const playButton = style({
    border: `3px solid ${vars.color.basic_contrast}`,
    background: vars.color.basic_3,
    color: vars.color.text.basic,
    fontWeight: 'bold',
    fontSize: '1.5rem',
    transition: 'box-shadow 0.3s',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: `3px 3px 0 0 ${vars.color.basic_contrast}`,
    ':active': {
        boxShadow: 'none !important'
    },
    ':hover': {
        cursor: 'pointer'
    }
});

export const playIcon = style({
    fill: vars.color.basic_contrast
});
