import React, { FC } from 'react';
import * as styles from './Contact.css';

interface ContactProps {
  title: string;
  url: string;
}

export const Contact: FC<ContactProps> = ({ title, url }) => (
  <a
    className={styles.contact}
    href={title === 'Email' ? `mailto:${url}` : url}
  >
    {title}
  </a>
);

export default Contact;
