import React from 'react';
import Header from '@/app/components/Header';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}
export const Layout = ({ children }: Props) => (
  <main className='notes'>
    <Header location='notes' />
    {children}
  </main>
);

export default Layout;
