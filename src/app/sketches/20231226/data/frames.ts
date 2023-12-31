import { generateBackgroundShapes, getRandomInt } from '../utils';
import { colors } from '../const';

type ColorsValues = (typeof colors)[keyof typeof colors];

export class FrameInstance {
  showLog: boolean;

  blockIndex: number;

  backgroundShapes: {
    scale: number;
    color: ColorsValues;
    position: [number, number];
    rotation: string;
  }[];

  glassblockEffect: {
    blurRadius: number;
    distortion: {
      bulkStrength: number;
      edgeStrength: number;
      edgeRadius: number;
    };
  };

  blockRotation: string;

  static count = 0;

  constructor() {
    this.showLog = !!Math.round(Math.random());
    this.blockIndex = FrameInstance.count++;
    this.backgroundShapes = generateBackgroundShapes();
    this.glassblockEffect = {
      blurRadius: Math.random(),
      distortion: {
        bulkStrength: Math.random().toFixed(6),
        edgeStrength: Math.random().toFixed(6),
        edgeRadius: getRandomInt(50),
      },
    };
    this.blockRotation = `${getRandomInt(4) / 4}turn`;
  }
}

export const frames = Array.from({ length: 12 }, () => new FrameInstance());
