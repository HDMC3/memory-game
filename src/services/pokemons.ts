import { random } from '../helpers/math';
import { type Pokemon } from '../types/pokemon';

const MAX_FILE_IDX = 25;

type EASE = 12;
type MEDIUM = 20;
type HARD = 30;

export const getRandomPokemons = async (pokemonsNumber: EASE | MEDIUM | HARD) => {
    let dataIdxs = [];

    if (pokemonsNumber === 12 || pokemonsNumber === 20) {
        dataIdxs = [1, 2].map(_ => random(MAX_FILE_IDX, 1));
    } else {
        dataIdxs = [1, 2, 3].map(_ => random(MAX_FILE_IDX, 1));
    }

    const data = await getData(dataIdxs);
    const flatData = data.reduce((acc, current) => acc.concat(current), []);

    const pokemons = [];
    const possibleIndexes = [...Array(pokemonsNumber).keys()];

    for (let i = 0; i < pokemonsNumber / 2; i++) {
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
