import { motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';
import { useLocation } from 'wouter';
import { vars } from '../../App.css';
import { playButton, itemsContainer, levelBannerContainer, levelBannerTitle, playIcon } from './LevelBanner.css';

interface Props {
    levelName: string
    levelBg: string
    levelColor: string
    level: 'ease' | 'medium' | 'hard'
}

export const LevelBanner = ({ children, levelName, levelBg, levelColor, level }: PropsWithChildren<Props>) => {
    const [, setLocation] = useLocation();

    const handleRedirect = () => {
        setLocation(`/game?level=${level}`);
    };

    return (

        <section className={ levelBannerContainer }>
            <motion.h2
                style={{ backgroundColor: levelBg, color: levelColor }}
                className={ levelBannerTitle }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                { levelName }
            </motion.h2>

            <div className={ itemsContainer }>

                { children }

                <motion.button
                    className={ playButton }
                    onClick={handleRedirect}
                    animate={{
                        x: [100, 0],
                        opacity: [0, 0.5, 1],
                        boxShadow: [
                            `0 0 0 0 ${vars.color.basic_contrast}`,
                            `0 0 0 0 ${vars.color.basic_contrast}`,
                            `3px 3px 0 0 ${vars.color.basic_contrast}`
                        ]
                    }}
                    transition={{
                        duration: 0.6,
                        times: [0.1, 0.95, 1],
                        ease: 'easeInOut'
                    }}
                >
                    <svg className={playIcon} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 4v16l13 -8z" />
                    </svg>
                </motion.button>
            </div>
        </section>
    );
};
