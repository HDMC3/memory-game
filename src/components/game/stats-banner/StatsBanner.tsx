import { useGame } from '../../../hooks/useGame';
import { Button } from '../../ui/button/Button';
import { ThemeButton } from '../../ui/theme-button/ThemeButton';
import { levelButton, moveStat, stat, statsContainer, statValue, timeStat, titleStat } from './StatsBanner.css';

export const StatsBanner = () => {
    const { state: { movesCount } } = useGame();

    return (
        <div className={statsContainer}>
            <ThemeButton />

            <Button color='success' className={levelButton}>
                Facil
            </Button>

            <div className={[stat, moveStat].join(' ')}>
                <h5 className={titleStat}>
                    Movimientos
                </h5>
                <span className={statValue}>
                    { movesCount }
                </span>
            </div>

            <div className={[stat, timeStat].join(' ')}>
                <h5 className={titleStat}>
                    Tiempo
                </h5>
                <span className={statValue}>
                    01:35
                </span>
            </div>
        </div>
    );
};
