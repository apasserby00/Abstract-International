import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { Config } from '../utils/Config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased flex flex-col justify-center items-center w-screen h-screen text-gray-700 px-3 md:px-0 bg-black text-white">
    {props.meta}

    <div>
      <video src="/assets/videos/animation.mp4" width="1000" muted autoPlay loop />
    </div>

    <div className="text-center absolute">
      <div className="text-5xl font-abstract">Abstract International</div>

      <div className="text-xl tracking-wide">Software and Design Studio</div>
    </div>

    <div className="text-xl text-red-900 text-opacity-50 tracking-widest">COMING SOON</div>
  </div>
);

export { Main };
