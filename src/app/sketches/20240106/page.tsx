'use client';

import React, { useState } from 'react';
import { Fill, Stretch, Rotate, consts, Contract, Shift, Skew } from './svg';
import * as styles from './page.css';

class Method {
  title: string;
  component: React.JSX.Element;

  constructor(title: string, component: React.JSX.Element) {
    this.title = title;
    this.component = component;
  }
}

const methods = [
  new Method('fill', <Fill />),
  new Method('stretch', <Stretch />),
  new Method('rotate', <Rotate />),
  new Method('contract', <Contract />),
  new Method('shift', <Shift />),
  new Method('skew', <Skew />),
];

const Index = () => {
  const [selectedMethod, setSelectedMethod] = useState('fill');

  const handleClickOpen = () => {
    const dialog = document.querySelector('dialog');
    dialog?.showModal();
  };

  const handleClickClose = () => {
    const dialog = document.querySelector('dialog');
    dialog?.close();
  };

  const handleClickMethod = (methodTitle: string) => {
    const dialog = document.querySelector('dialog');
    setSelectedMethod(methodTitle);

    dialog?.close();
  };

  return (
    <main className={styles.root}>
      <dialog className={styles.dialog}>
        <button
          className={styles.button}
          type='button'
          onClick={handleClickClose}
        >
          Method Representation
        </button>
        <ul className={styles.methods}>
          {methods.map((method) => (
            <li className={styles.method} key={method.title}>
              <button
                type='button'
                className={styles.methodButton}
                onClick={() => handleClickMethod(method.title)}
              >
                {method.title}
              </button>
            </li>
          ))}
        </ul>
      </dialog>
      <button
        className={styles.button}
        type='button'
        onClick={handleClickOpen}
        style={{}} // removes linting warning
      >
        Methods List
      </button>
      <svg
        className={styles.svg}
        viewBox={`0 0 ${consts.viewBox.width} ${consts.viewBox.height}`}
        xmlns='http://www.w3.org/2000/svg'
      >
        {methods.find((method) => method.title === selectedMethod)?.component}
      </svg>
    </main>
  );
};

export default Index;
