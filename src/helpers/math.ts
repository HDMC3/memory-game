export const random = (max: number, min: number) => {
    const rnd = Math.random() * (max - min) + min;
    return Math.round(rnd);
};
