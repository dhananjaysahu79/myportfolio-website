import React from 'react';
import {Container} from '../../globalStyles'
import {
  Infosec,
  BadgeContainer,
  Img,
  BadgeText,
  HRContainer,
} from './Infosection.elements';

function HRbadges(){
    return (
        <>
          <Infosec lightBg = {true} padd = {'20px'}>
            <HRContainer>
              <BadgeText>HackerRank Badges</BadgeText>
             <BadgeContainer>
              <Img src = {'https://drive.google.com/uc?export=download&id=16DDh67WgMRCuvtNSn2EpbRvnJPZXrgzU'}></Img>
              <Img src = {'https://drive.google.com/uc?export=download&id=1LoFh94pxZXDerZT4tISHaU5-TMSEFIAY'}></Img>
             </BadgeContainer>
           </HRContainer>
          </Infosec>
        </>
    );
}

export default HRbadges;