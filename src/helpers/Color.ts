export interface Color {
    getRGB: () => { r: number, g: number, b: number }
    getHSL: () => { h: number, s: number, l: number }
}
