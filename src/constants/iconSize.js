// Object.freeze статичний метод об'єкту, який запобігаю внесення змін із зовнішнього коду

export const iconSize = Object.freeze({
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
});

// export const iconSize = {
//     xs: 12,
//     sm: 16,
//     md: 24,
//     lg: 32,
// };