import { motion } from 'framer-motion';
import { vars } from '../../App.css';
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
    return (
        <motion.div
            className={cardContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
                    animate={{
                        boxShadow: [
                            '0 0 0 0 rgba(0, 0, 0, 0)',
                            `3px 3px 0 0 ${vars.color.basic_contrast}`
                        ],
                        rotateY: [180, 180]
                    }}
                    transition={{
                        duration: 0.4,
                        delay: 0.05 * entryOrder + 1
                    }}
                >
                    <img
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
