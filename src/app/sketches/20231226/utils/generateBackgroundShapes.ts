import { colors } from '../const';
import { getRandomInt } from './getRandomInt';

export const generateBackgroundShapes = () => {
  const backgroundShapes = [];
  const maxScaleFactor = 4;
  const numShapes = getRandomInt(10);

  for (let i = 0; i < numShapes; i += 1) {
    backgroundShapes.push({
      scale: (Math.random() * maxScaleFactor).toFixed(3),
      color: Object.values(colors)[getRandomInt(Object.keys(colors).length)],
      position: [Math.random().toFixed(3), Math.random().toFixed(3)],
      rotation: `${Math.random().toFixed(3)}turn`,
    });
  }

  return backgroundShapes;
};
