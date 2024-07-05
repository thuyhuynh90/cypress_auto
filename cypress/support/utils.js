export function generateRandomNumber(digits = 3) {
    const min = Math.pow(10, digits - 1);
    const max = min * 10 - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomNumber = generateRandomNumber();