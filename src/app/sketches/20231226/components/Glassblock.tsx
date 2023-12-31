import React, { type FC } from 'react';
import { FrameInstance } from '../data';
import * as styles from './Glassblock.css';

const getDataText = (
  name: string,
  children: string | boolean | number,
  last = false
) => {
  const text = last ? `${name}: ${children}` : `${name}: ${children},`;

  return <span className={styles.text}>{text}</span>;
};

interface GlassblockProps {
  frameData: FrameInstance;
}
export const Glassblock: FC<GlassblockProps> = ({ frameData }) =>
  frameData.showLog ? (
    <div
      className={styles.root}
      style={{ transform: `rotate(${frameData.blockRotation})` }}
    >
      <div className={styles.barcode}>
        <span className={styles.text}>
          {getDataText('showLog', frameData.showLog)}
        </span>
        <span className={styles.text}>
          {getDataText('blockIndex', frameData.blockIndex)}
        </span>
        <span className={styles.text}>backgroundShapes: [</span>
        {frameData.backgroundShapes.map((shape) => (
          <div className={styles.indent} key={shape.scale}>
            <span className={styles.text}>{'{'}</span>
            <div className={styles.indent}>
              <span className={styles.text}>
                {getDataText('scale', shape.scale)}
              </span>
              <span className={styles.text}>
                {getDataText('color', shape.color)}
              </span>
              <span className={styles.text}>
                {getDataText(
                  'position',
                  shape.position.map((v) => v).join(', ')
                )}
              </span>
              <span className={styles.text}>
                {getDataText('rotation', shape.rotation)}
              </span>
            </div>
            <span className={styles.text}>{'},'}</span>
          </div>
        ))}
        <span className={styles.text}>]</span>
        <span className={styles.text}>{'glassblockEffect: {'}</span>
        <div className={styles.indent}>
          <span className={styles.text}>
            {getDataText('blurRadius', frameData.glassblockEffect.blurRadius)}
          </span>
          <span className={styles.text}>
            {getDataText(
              'bulkStrength',
              frameData.glassblockEffect.distortion.bulkStrength
            )}
          </span>
          <span className={styles.text}>
            {getDataText(
              'edgeStrength',
              frameData.glassblockEffect.distortion.edgeStrength
            )}
          </span>
          <span className={styles.text}>
            {getDataText(
              'edgeRadius',
              frameData.glassblockEffect.distortion.edgeRadius
            )}
          </span>
        </div>
        <span className={styles.text}>{'},'}</span>
        <span className={styles.text}>
          {getDataText('blockRotation', frameData.blockRotation)}
        </span>
      </div>
    </div>
  ) : (
    <div className={styles.root} />
  );

export default Glassblock;
