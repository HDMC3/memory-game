import { RgbColor } from '../RgbColor';

export const getImageColors = (image: HTMLImageElement, top?: number) => {
    image.crossOrigin = 'Anonymous';
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return [];

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    const imageData = ctx.getImageData(0, 0, image.width, image.height);
    const data = imageData.data;

    const rgbColors: RgbColor[] = [];
    for (let i = 0; i < data.length; i += 4) {
        const color = new RgbColor({
            r: data[i],
            g: data[i + 1],
            b: data[i + 2],
            a: data[i + 3]
        });

        const hsl = color.getHSL();

        if (hsl.s >= 0.7 || (hsl.l >= 0.5 && hsl.l <= 0.7)) {
            rgbColors.push(color);
        }
    }

    const stringColors = rgbColors.map(color => color.toString());

    const uniqueColors: Record<string, number> = {};
    for (const rgbStr of stringColors) {
        if (!uniqueColors[rgbStr]) {
            uniqueColors[rgbStr] = 1;
            continue;
        }
        uniqueColors[rgbStr]++;
    }

    const colorsArray = Object.entries(uniqueColors);
    if (top) {
        const colorsTop = colorsArray.sort((a, b) => b[1] - a[1]);
        return colorsTop.map(c => c[0]).slice(0, top);
    }

    const colors = colorsArray.sort((a, b) => a[1] - b[1]);
    return colors.map(c => c[0]);
};
