import React from 'react';
import {homeTile} from './Data';
import InfoTools from '../../components/InfoSection/Infotools';
import Project from '../ProjectPage/Project';
import HRbadges from '../../components/InfoSection/HRbadges';


function Works() {
    return (
      <>
        <InfoTools {...homeTile} />
        <Project />
        <HRbadges />
      </>
    );
}

export default Works;