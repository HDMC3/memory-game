import { random } from '../helpers/math';
import { type GameLevel } from '../types/game-level';
import { type Pokemon } from '../types/pokemon';

const MAX_FILE_IDX = 25;

export const getRandomPokemons = async (gameLevel: GameLevel) => {
    let dataIdxs = [];
    const availableFileIndexes = Array.from({ length: MAX_FILE_IDX }, (_, i) => i + 1);

    if (gameLevel.name === 'ease' || gameLevel.name === 'medium') {
        dataIdxs = [1, 2].map(_ => {
            const rndIndex = random(availableFileIndexes.length - 1, 0);
            const fileIndex = availableFileIndexes.splice(rndIndex, 1)[0];
            return fileIndex;
        });
    } else {
        dataIdxs = [1, 2, 3].map(_ => {
            const rndIndex = random(availableFileIndexes.length - 1, 0);
            const fileIndex = availableFileIndexes.splice(rndIndex, 1)[0];
            return fileIndex;
        });
    }

    const data = await getData(dataIdxs);
    const flatData = data.reduce((acc, current) => acc.concat(current), []);

    const pokemons = [];
    const possibleIndexes = [...Array(gameLevel.cardsNumber).keys()];

    for (let i = 0; i < gameLevel.cardsNumber / 2; i++) {
        const rndPokemon = flatData.splice(random(flatData.length - 1, 0), 1);
        const idx = possibleIndexes.splice(random(possibleIndexes.length - 1, 0), 1);
        const idxPair = possibleIndexes.splice(random(possibleIndexes.length - 1, 0), 1);
        pokemons[idx[0]] = rndPokemon[0];
        pokemons[idxPair[0]] = rndPokemon[0];
    }

    return pokemons;
};

const getData = async (dataIdxs: number[]) => {
    const promises = dataIdxs.map<Promise<Pokemon[]>>(async idx => {
        const resp = await fetch(`/data/pokemons_${idx}.json`);
        return await resp.json();
    });

    const result = await Promise.all(promises);

    return result;
};
