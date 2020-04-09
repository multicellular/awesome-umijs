import React from 'react';
import { history } from 'umi';

import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
export default (props: any) => {
  const goLogin = () => {
    history.push('/login');
  };
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
