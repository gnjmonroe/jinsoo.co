'use client';

import React, { type FC, useState, useRef } from 'react';
import * as styles from './page.css';

const frame = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const rings = {
  server: {
    radiusFactor: 0.15,
  },
  client: {
    radiusFactor: 0.3,
  },
};
const filter = {
  bgWidthPct: 70,
};

interface DataValue {
  index: number;
  location: 'client' | 'server';
  points: DOMPoint | undefined;
  value: 'loading' | number | undefined;
}

export interface Data {
  [key: string]: DataValue;
  buttonClick: DataValue;
  submitToServer: DataValue;
  receiveFromClient: DataValue;
  submitToClient: DataValue;
  receiveFromServer: DataValue;
}

const Index: FC = () => {
  const ringServerRef = useRef<SVGCircleElement | null>(null);
  const ringClientRef = useRef<SVGCircleElement | null>(null);

  const [data, setData] = useState<Data>({
    buttonClick: {
      index: 0,
      location: 'client',
      points: undefined,
      value: undefined,
    },
    submitToServer: {
      index: 1,
      location: 'client',
      points: undefined,
      value: undefined,
    },
    receiveFromClient: {
      index: 2,
      location: 'server',
      points: undefined,
      value: undefined,
    },
    submitToClient: {
      index: 3,
      location: 'server',
      points: undefined,
      value: undefined,
    },
    receiveFromServer: {
      index: 4,
      location: 'client',
      points: undefined,
      value: undefined,
    },
  });

  const handleClickButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setData({
      buttonClick: {
        ...data.buttonClick,
        value: 'loading',
      },
      submitToServer: {
        ...data.submitToServer,
        value: 'loading',
      },
      receiveFromClient: {
        ...data.receiveFromClient,
        value: 'loading',
      },
      submitToClient: {
        ...data.submitToClient,
        value: 'loading',
      },
      receiveFromServer: {
        ...data.receiveFromServer,
        value: 'loading',
      },
    });

    const clickTime = new Date().valueOf();
    data.buttonClick.value = clickTime;

    setTimeout(async () => {
      const submitToServerTime = new Date().valueOf();
      data.submitToServer.value = submitToServerTime;

      const test = await fetch(
        `${window.location.origin}/sketches/20240102/api`,
        {
          method: 'POST',
          body: JSON.stringify(data),
        },
      );
      const resp = (await test.json()) as Data;

      resp.receiveFromServer.value = new Date().valueOf();

      // Place points appropriately
      Object.keys(resp).forEach((key) => {
        if (resp[key].location === 'client') {
          if (!ringClientRef.current) return;

          const ring = ringClientRef.current;
          const ringLength = ring.getTotalLength();
          const distOnRing = Math.random() * ringLength;
          resp[key].points = ring.getPointAtLength(distOnRing);
        } else {
          if (!ringServerRef.current) return;

          const ring = ringServerRef.current;
          const ringLength = ring.getTotalLength();
          const distOnRing = Math.random() * ringLength;
          resp[key].points = ring.getPointAtLength(distOnRing);
        }
      });

      setData(resp);
    }, Math.random() * 500);
  };

  return (
    <main className={styles.root}>
      <button
        className={styles.button}
        onClick={handleClickButton}
        type='submit'
      >
        Initiate event
      </button>
      <svg
        className={styles.svg}
        viewBox={`0 0 ${frame.width} ${frame.height}`}
      >
        <defs>
          <path
            id='ringServer'
            d={`M${frame.width * rings.server.radiusFactor},${
              frame.height * 0.5
            } a${frame.width * (0.5 - rings.server.radiusFactor)} ${
              frame.width * (0.5 - rings.server.radiusFactor)
            } 0 0 1 ${frame.width * (1 - 2 * rings.server.radiusFactor)} 0
          `}
          />
          <path
            id='ringClient'
            d={`M${frame.width * rings.client.radiusFactor},${
              frame.height * 0.5
            } a${frame.width * (0.5 - rings.client.radiusFactor)} ${
              frame.width * (0.5 - rings.client.radiusFactor)
            } 0 0 1 ${frame.width * (1 - 2 * rings.client.radiusFactor)} 0
          `}
          />
          <filter
            x={`-${filter.bgWidthPct / 2}%`}
            y={0}
            width={`${100 + filter.bgWidthPct}%`}
            height='100%'
            id='ringLabel'
          >
            <feFlood floodColor='white' result='bg' />
            <feMerge>
              <feMergeNode in='bg' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <marker
            id='triangle'
            viewBox='0 0 12 6'
            refX='17'
            refY='3'
            markerUnits='strokeWidth'
            markerWidth='10'
            markerHeight='10'
            orient='auto'
          >
            <path d='M 0 0 L 12 3 L 0 6 z' fill='#aaa' />
          </marker>
        </defs>

        {/* rings */}
        <g stroke='#bbb' strokeWidth={1} fill='transparent'>
          <circle
            cx={frame.width / 2}
            cy={frame.height / 2}
            r={frame.width * (1 / 2 - rings.server.radiusFactor)}
            ref={ringServerRef}
          />
          <circle
            cx={frame.width / 2}
            cy={frame.height / 2}
            r={frame.width * (1 / 2 - rings.client.radiusFactor)}
            ref={ringClientRef}
          />
        </g>

        {/* ring labels */}
        <g
          fontSize={14}
          dominantBaseline='middle'
          fill='#bbb'
          filter='url(#ringLabel)'
        >
          <text>
            <textPath
              href='#ringServer'
              startOffset='calc(50% - 2.5ch)'
              textLength='5ch'
            >
              Server
            </textPath>
          </text>
          <text>
            <textPath
              href='#ringClient'
              startOffset='calc(50% - 2.5ch)'
              textLength='5ch'
            >
              Client
            </textPath>
          </text>
        </g>

        {/* lines */}
        <g
          className={
            styles.fadeGroup[`${data.buttonClick.value === 'loading'}`]
          }
        >
          {Object.entries(data).map((entry, i, arr) => {
            if (!entry[1].value || entry[1].value === 'loading')
              return undefined;
            if (i === arr.length - 1) return undefined;

            return (
              <React.Fragment key={entry[0]}>
                <line
                  x1={entry[1].points?.x}
                  y1={entry[1].points?.y}
                  x2={arr[i + 1][1].points?.x}
                  y2={arr[i + 1][1].points?.y}
                  stroke='#ccc'
                  strokeWidth={2}
                  strokeDasharray='8 3'
                  markerEnd='url(#triangle)'
                />
              </React.Fragment>
            );
          })}
        </g>

        {/* points */}
        <g
          className={
            styles.fadeGroup[`${data.buttonClick.value === 'loading'}`]
          }
        >
          {Object.keys(data).map((key) => {
            if (!data[key].value || data[key].value === 'loading')
              return undefined;

            return (
              <circle
                key={key}
                cx={data[key].points?.x}
                cy={data[key].points?.y}
                r={10}
                fill='#777'
                stroke='#fff'
                strokeWidth={5}
              />
            );
          })}
        </g>

        {/* point labels */}
        <g
          className={
            styles.fadeGroup[`${data.buttonClick.value === 'loading'}`]
          }
        >
          {Object.entries(data).map((entry, i, arr) => {
            const [key, value] = entry;
            if (!value || value.value === 'loading') return undefined;
            if (!value.points) return undefined;

            return (
              <foreignObject
                x={value.points.x + 20}
                y={value.points.y - 10}
                width='100%'
                height='100%'
                key={entry[0]}
              >
                <div className={styles.foreignObjectRoot}>
                  <span
                    className={styles.foSpan}
                  >{`${value.index}: ${key}`}</span>
                  <span
                    className={styles.foSpan}
                  >{`${value.value}@${value.location}`}</span>
                  <span className={styles.foSpan}>
                    {i
                      ? `(+${arr[i][1].value - arr[i - 1][1].value}ms)`
                      : `(+0ms)`}
                  </span>
                </div>
              </foreignObject>
            );
          })}
        </g>
      </svg>
    </main>
  );
};

export default Index;
