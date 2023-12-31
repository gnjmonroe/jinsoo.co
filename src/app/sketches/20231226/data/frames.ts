import { generateBackgroundShapes, getRandomInt } from '../utils';
import { colors } from '../const';

type ColorsValues = (typeof colors)[keyof typeof colors];

export class FrameInstance {
  showLog: boolean;

  blockIndex: number;

  backgroundShapes: {
    scale: string;
    color: ColorsValues;
    position: string[];
    rotation: string;
  }[];

  glassblockEffect: {
    blurRadius: string;
    distortion: {
      bulkStrength: string;
      edgeStrength: string;
      edgeRadius: number;
    };
  };

  blockRotation: string;

  static count = 0;

  constructor() {
    this.showLog = !!Math.round(Math.random());
    this.blockIndex = FrameInstance.count;
    this.backgroundShapes = generateBackgroundShapes();
    this.glassblockEffect = {
      blurRadius: Math.random().toFixed(6),
      distortion: {
        bulkStrength: Math.random().toFixed(6),
        edgeStrength: Math.random().toFixed(6),
        edgeRadius: getRandomInt(50),
      },
    };
    this.blockRotation = `${getRandomInt(4) / 4}turn`;

    FrameInstance.count += 1;
  }
}

export const frames = Array.from({ length: 12 }, () => new FrameInstance());
