import { vars } from '../App.css';
import { LevelBannerItem } from '../components/home/level-banner-item/LevelBannerItem';
import { LevelBanner } from '../components/home/level-banner/LevelBanner';
import { ThemeButton } from '../components/ui/theme-button/ThemeButton';
import { container, homeDescription, innerContainer, levelsContainer, title } from './Home.css';

export const Home = () => {
    return (
        <main className={container}>
            <div className={innerContainer}>
                <ThemeButton />

                <h1 className={title}>Poke Memory</h1>

                <p className={homeDescription}>
                    Juega con tus pokemon favoritos encontrando las parejas con la menor cantidad de movimientos y el menor tiempo posible.
                </p>

            </div>
            <section className={levelsContainer}>
                <LevelBanner
                    level="ease"
                    levelName="Facil"
                    levelBg={vars.color.success}
                    levelColor={vars.color.text.success}
                >
                    <LevelBannerItem entryOrder={1} image={{ name: '1', type: 'sprite' }} />
                    <LevelBannerItem entryOrder={2} image={{ name: '4', type: 'sprite' }} />
                    <LevelBannerItem entryOrder={3} image={{ name: '7', type: 'sprite' }} />

                </LevelBanner>

                <LevelBanner
                    level="medium"
                    levelName="Medio"
                    levelBg={vars.color.warning}
                    levelColor={vars.color.text.warning}
                >
                    <LevelBannerItem entryOrder={4} image={{ name: '2', type: 'sprite' }} />
                    <LevelBannerItem entryOrder={5} image={{ name: '5', type: 'sprite' }} />
                    <LevelBannerItem entryOrder={6} image={{ name: '8', type: 'sprite' }} />

                </LevelBanner>

                <LevelBanner
                    level="hard"
                    levelName="Dificil"
                    levelBg={vars.color.error}
                    levelColor={vars.color.text.error}
                >
                    <LevelBannerItem entryOrder={7} image={{ name: '3', type: 'sprite' }} />
                    <LevelBannerItem entryOrder={8} image={{ name: '6', type: 'sprite' }} />
                    <LevelBannerItem entryOrder={9} image={{ name: '9', type: 'sprite' }} />

                </LevelBanner>
            </section>
        </main>
    );
};
