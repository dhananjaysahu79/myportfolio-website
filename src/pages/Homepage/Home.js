import React from 'react';
import {homeSlide1, homeSlide2, homeSlide3, homeTile,homeSlide4} from './Data';
import InfoSection  from '../../components/InfoSection/Infosection1';
import InfoSection2  from '../../components/InfoSection/Infosection2';
import InfoTools from '../../components/InfoSection/Infotools';
import Project from '../ProjectPage/Project';
import HRbadges from '../../components/InfoSection/HRbadges';
import Footer from '../Footer/Footer';

function Home() {
    return (
      <>
        <InfoSection {...homeSlide1} />
        <InfoSection {...homeSlide2} />
        <InfoSection2 {...homeSlide3} />
        <InfoTools {...homeTile} />
        <Project />\
        <HRbadges />
        <Footer />
      </>
    );
}

export default Home;