import React from 'react';
import { homeSlide2, homeSlide3} from './Data';
import InfoSection  from '../../components/InfoSection/Infosection1';
import InfoSection2  from '../../components/InfoSection/Infosection2';

function About() {
    return (
      <>
        <InfoSection {...homeSlide2} />
        <InfoSection2 {...homeSlide3} />
      </>
    );
}

export default About;