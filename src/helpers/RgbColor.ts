import { type Color } from './Color';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type RgbParams = { r: number, g: number, b: number, a?: number };

export class RgbColor implements Color {
    public readonly r: number;
    public readonly g: number;
    public readonly b: number;
    public readonly a: number;

    constructor (colorParams: RgbParams) {
        this.r = colorParams.r;
        this.g = colorParams.g;
        this.b = colorParams.b;
        this.a = colorParams.a ?? 1;
    }

    toString () {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    getRGB () {
        return { r: this.r, g: this.g, b: this.b };
    }

    getHSL () {
        const rgbPercents = [this.r, this.g, this.b].map(n => n * 1 / 255);
        const MAX = Math.max(...rgbPercents);
        const MIN = Math.min(...rgbPercents);

        const l = 0.5 * (MAX + MIN);
        const s = this.calculateSaturation(l, MAX, MIN);
        const h = this.calculateHue(MAX, MIN);

        return { h, s, l };
    }

    private calculateSaturation (l: number, rgbMAX: number, rgbMIN: number) {
        if (rgbMAX === rgbMIN) return 0;

        if (l <= 0.5) {
            return (rgbMAX - rgbMIN) / (2 * l);
        }

        return (rgbMAX - rgbMIN) / (2 - (2 * l));
    }

    private calculateHue (rgbMAX: number, rgbMIN: number) {
        if (rgbMAX === rgbMIN) return 0;

        const rFactor = (this.g - this.b) / (rgbMAX - rgbMIN);
        const gFactor = (this.b - this.r) / (rgbMAX - rgbMIN);
        const bFactor = (this.r - this.g) / (rgbMAX - rgbMIN);

        if (rgbMAX === this.r) {
            return (60 * rFactor + 360) % 360;
        }

        if (rgbMAX === this.g) {
            return 60 * gFactor + 120;
        }

        return 60 * bFactor + 240;
    }
}
