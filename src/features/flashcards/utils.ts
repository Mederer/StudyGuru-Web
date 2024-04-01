export function isColourDark(hex: string) {
    const r = parseInt(hex.slice(1, 3));
    const g = parseInt(hex.slice(3, 5));
    const b = parseInt(hex.slice(5, 7));

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
}
