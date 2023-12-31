export const getRandomInt = (max: number, min: number = 0) =>
  Math.floor(Math.random() * (max - min)) + min;

export default getRandomInt;
