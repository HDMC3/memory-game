import { motion } from 'framer-motion';
import { useState, type SyntheticEvent } from 'react';
import { vars } from '../../App.css';
import { getImageColors } from '../../helpers/images/getImageColors';
import { card, cardBack, cardFront, cardImage, cardContainer } from './LevelBannerItem.css';

interface Props {
    image: {
        name: string
        type: 'sprite'
    }
    entryOrder: number
}

const spriteBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export const LevelBannerItem = ({ image, entryOrder }: Props) => {
    const [background, setBackground] = useState<string>('');

    const hadleImageLoad = (e: SyntheticEvent<HTMLImageElement>) => {
        const img = e.target as HTMLImageElement;
        const rgbColors = getImageColors(img, 2);
        setBackground(rgbColors[0]);
    };

    return (
        <motion.div
            className={cardContainer}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: 'spring',
                damping: 10,
                delay: 0.1 * entryOrder
            }}
        >
            <motion.div
                className={card}
                animate={{ rotateY: 180 }}
                transition={{
                    duration: 0.5,
                    delay: 0.05 * entryOrder
                }}
            >
                <motion.div
                    className={cardFront}
                    style={{ background }}
                    animate={{
                        boxShadow: [
                            '0 0 0 0 rgba(0, 0, 0, 0)',
                            `3px 3px 0 0 ${vars.color.basic_contrast}`
                        ],
                        rotateY: [180, 180],
                        scale: [0.9, 1]
                    }}
                    transition={{
                        duration: 0.4,
                        delay: 0.05 * entryOrder + 1
                    }}
                >
                    <img
                        onLoad={hadleImageLoad}
                        className={cardImage}
                        src={`${spriteBaseUrl}${image.name}.png`}
                        alt="Pokemon sprite"
                    />
                </motion.div>
                <div className={cardBack}>
                </div>
            </motion.div>
        </motion.div>
    );
};
