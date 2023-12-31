import React, { type FC } from 'react';
import { FrameInstance } from '../data';
import { DataSpan } from './DataSpan';
import * as styles from './Glassblock.css';

interface GlassblockProps {
  frameData: FrameInstance;
}
export const Glassblock: FC<GlassblockProps> = ({ frameData }) => (
  <div
    className={styles.root}
    style={
      frameData.showLog
        ? { transform: `rotate(${frameData.blockRotation})` }
        : undefined
    }
  >
    {frameData.showLog ? (
      <div className={styles.barcode}>
        <DataSpan name='showLog'>{frameData.showLog}</DataSpan>
        <DataSpan name='blockIndex'>{frameData.blockIndex}</DataSpan>
        <span className={styles.text}>{'backgroundShapes: ['}</span>
        {frameData.backgroundShapes.map((shape, i) => (
          <div className={styles.indent} key={i}>
            <span className={styles.text}>{'{'}</span>
            <div className={styles.indent}>
              <DataSpan name='scale'>{shape.scale}</DataSpan>
              <DataSpan name='color'>{shape.color}</DataSpan>
              <DataSpan name='position'>
                {`[${shape.position.map((v) => v).join(', ')}]`}
              </DataSpan>
              <DataSpan name='rotation'>{shape.rotation}</DataSpan>
            </div>
            <span className={styles.text}>{'},'}</span>
          </div>
        ))}
        <span className={styles.text}>{']'}</span>
        <span className={styles.text}>{'glassblockEffect: {'}</span>
        <span className={styles.text}>
          {frameData.glassblockEffect.blurRadius}
        </span>
        <div className={styles.indent}>
          <DataSpan name='bulkStrength'>
            {frameData.glassblockEffect.distortion.bulkStrength}
          </DataSpan>
          <DataSpan name='edgeStrength'>
            {frameData.glassblockEffect.distortion.edgeStrength}
          </DataSpan>
          <DataSpan name='edgeRadius'>
            {frameData.glassblockEffect.distortion.edgeRadius}
          </DataSpan>
        </div>
        <span className={styles.text}>{'},'}</span>
        <DataSpan name='blockRotation'>{frameData.blockRotation}</DataSpan>
      </div>
    ) : null}
  </div>
);

export default Glassblock;
