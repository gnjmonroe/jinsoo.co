'use client';

import React, { type FC } from 'react';
import * as styles from './Glassblock.css';

interface DataSpanProps {
  name: string;
  children: typeof React.Children;
  last?: boolean;
}
export const DataSpan: FC<DataSpanProps> = ({
  name,
  children,
  last = false,
}) => {
  const text = last ? `${name}: ${children}` : `${name}: ${children},`;

  return <span className={styles.text}>{text}</span>;
};

export default DataSpan;
