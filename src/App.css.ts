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
        },
        themeButton: {
            top: '',
            bottom: '',
            innerCircle: ''
        }
    },
    card: {
        basic_1: '',
        basic_2: '',
        basic_3: '',
        basic_4: '',
        border: ''
    }
});

createGlobalTheme('body', vars, {
    color: {
        basic_1: '#f8fafc',
        basic_2: '#f1f5f9',
        basic_3: '#e2e8f0',
        basic_4: '#cbd5e1',
        basic_5: '#94a3b8',
        basic_6: '#64748b',
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
        },
        themeButton: {
            top: '#151515',
            bottom: '#FFF',
            innerCircle: '#ffce3b'
        }
    },
    card: {
        basic_1: '#f3f4f6',
        basic_2: '#e5e7eb',
        basic_3: '#d1d5db',
        basic_4: '#9ca3af',
        border: '#9ca3af'
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
        },

        themeButton: {
            top: '#FF0000',
            bottom: '#FFF',
            innerCircle: 'rgba(21, 21, 21, 1)'
        }
    },
    card: {
        basic_1: '',
        basic_2: '',
        basic_3: '',
        basic_4: '',
        border: ''
    }
});

globalStyle('body', {
    backgroundColor: vars.color.basic_1,
    color: vars.color.text.basic,
    fontFamily: '\'Inter\', sans-serif',
    margin: 0
});
