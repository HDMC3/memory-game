import { type PropsWithChildren } from 'react';
import { vars } from '../../../App.css';
import { button } from './Button.css';


export type ButtonColor = 'success' | 'warning' | 'error' | 'primary' | 'secondary' | 'default';
interface Props {
    onClick?: () => void
    color?: ButtonColor
    style?: React.CSSProperties
    className?: string
}

const colors: Record<string, { bg: string, text: string }> = {
    success: {
        bg: vars.color.success,
        text: vars.color.text.success
    },
    warning: {
        bg: vars.color.warning,
        text: vars.color.text.warning
    },
    error: {
        bg: vars.color.error,
        text: vars.color.text.error
    },
    primary: {
        bg: vars.color.primary,
        text: vars.color.text.primary
    },
    secondary: {
        bg: vars.color.secondary,
        text: vars.color.text.secondary
    }
};

export const Button = ({ children, color = 'default', onClick, style, className }: PropsWithChildren<Props>) => {
    const background = color === 'default' ? vars.color.basic_1 : colors[color].bg;
    const fontColor = color === 'default' ? vars.color.text.basic : colors[color].text;

    const handleClick = () => {
        if (!onClick) return;

        onClick();
    };

    return (
        <button onClick={handleClick} className={className ? `${button} ${className}` : button}
            style={{
                backgroundColor: background,
                color: fontColor,
                ...style
            }}
        >
            { children }
        </button>
    );
};
