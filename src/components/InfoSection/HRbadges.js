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
          <Infosec lightBg = {true} padd = {'5px'}>
            <HRContainer>
              <BadgeText>HackerRank Badges</BadgeText>
              <a href = 'https://www.hackerrank.com/dhananjaysahu79' target='_blank'>
                <BadgeContainer>
                  <Img src = {'https://drive.google.com/uc?export=download&id=16DDh67WgMRCuvtNSn2EpbRvnJPZXrgzU'}></Img>
                  <Img src = {'https://drive.google.com/uc?export=download&id=1LoFh94pxZXDerZT4tISHaU5-TMSEFIAY'}></Img>
                </BadgeContainer>
              </a>
           </HRContainer>
          </Infosec>
        </>
    );
}

export default HRbadges;