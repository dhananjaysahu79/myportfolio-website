import React from 'react';
import {homeSlide1} from './Data';
import InfoSection  from '../../components/InfoSection/Infosection1';
import Footer from '../../components/Footer/Footer';
import About from '../About/About';
import Works from '../Works/Works';

function Home() {
    return (
      <>
        <InfoSection {...homeSlide1} />
        <About/>
        <Works/>

      </>
    );
}

export default Home;