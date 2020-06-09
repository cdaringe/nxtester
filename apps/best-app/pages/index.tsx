import React from 'react';

import './index.css';

import { ReactComponent as NxLogo } from '../assets/nx-logo-white.svg';
import { Ui } from "@nxtester/ui";
import { zap } from "@nxtester/lib-with-custom-build";
export const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className="app">
      <header className="flex">
        <NxLogo alt="" width="75" height="50" />
        <Ui />
        <pre>{zap}</pre>
      </header>

    </div>
  );
};

export default Index;
