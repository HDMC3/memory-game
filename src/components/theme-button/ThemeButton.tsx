import { themeButton } from './ThemeButton.css';

export const ThemeButton = () => {
    const handleChangeTheme = () => {
        const currentTheme = document.documentElement.dataset.theme;
        const newTheme = currentTheme === 'dark' ? '' : 'dark';
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button className={themeButton} onClick={handleChangeTheme}></button>
    );
};
