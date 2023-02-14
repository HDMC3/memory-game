import { Button } from '../components/button/Button';
import { ThemeButton } from '../components/theme-button/ThemeButton';
import { gameContainer, statValue, stat, statsContainer, titleStat, timeStat, moveStat, levelButton } from './Game.css';

export const Game = () => {
    return (
        <div className={gameContainer}>
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
                        19
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
        </div>
    );
};
