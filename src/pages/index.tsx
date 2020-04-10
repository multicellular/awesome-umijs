import React from 'react';

import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

export default (props: any) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
