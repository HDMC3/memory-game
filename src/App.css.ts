import { createGlobalTheme, createTheme, globalStyle } from '@vanilla-extract/css';

export const [theme, vars] = createTheme({
    color: {
        basic_1: '',
        basic_2: '',
        basic_3: '',
        basic_4: '',
        basic_5: '',
        basic_6: '',
        basic_contrast: '',
        primary: '',
        secondary: '',
        success: '',
        warning: '',
        error: '',
        text: {
            basic: '',
            primary: '',
            secondary: '',
            success: '',
            warning: '',
            error: ''
        }
    }
});

createGlobalTheme('body', vars, {
    color: {
        basic_1: '#fbf9f8',
        basic_2: '#eee5e5',
        basic_3: '#e0d2d6',
        basic_4: '#cdc0cc',
        basic_5: '#b3b1c3',
        basic_6: '#94a3b8',
        basic_contrast: '#151515',
        primary: '#4e95d7',
        secondary: '#8e349b',
        success: '#b5e82a',
        warning: '#ffce3b',
        error: '#dd4635',
        text: {
            basic: '#222222',
            primary: '#222222',
            secondary: '#ffffff',
            success: '#222222',
            warning: '#222222',
            error: '#111111'
        }
    }
});

createGlobalTheme('html[data-theme=dark] body', vars, {
    color: {
        basic_1: '#151515',
        basic_2: '#1c1c1d',
        basic_3: '#232425',
        basic_4: '#2b2b2d',
        basic_5: '#323336',
        basic_6: '#3a3b3f',
        basic_contrast: '#fbf9f8',
        primary: '#4e95d7',
        secondary: '#d946ef',
        success: '#b5e82a',
        warning: '#ffce3b',
        error: '#ff4646',

        text: {
            basic: '#fbf9f8',
            primary: '#111111',
            secondary: '#111111',
            success: '#111111',
            warning: '#111111',
            error: '#111111'
        }
    }
});

globalStyle('body', {
    backgroundColor: vars.color.basic_1,
    color: vars.color.text.basic,
    fontFamily: 'sans-serif',
    margin: 0
});
