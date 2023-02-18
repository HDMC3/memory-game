export const timerToString = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = timeInSeconds % 60;
    const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutesStr}:${secondsStr}`;
};
