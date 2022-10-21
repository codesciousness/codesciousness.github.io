export const calcOffsetTop = (width) => {
    if (width && width <= 500) return 245;
    else if (width && width <= 700) return 240;
    else if (width && width > 700) return 270;
};