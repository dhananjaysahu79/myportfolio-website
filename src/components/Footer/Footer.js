import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaEnvelope,
} from 'react-icons/fa'
import {
   FooterContainer,
   SocialMedia,
   WebsiteRights,
   SocialIcons,
   IconsContainer
}from './Footer.elements';

function Footer(){
    return (
        <>
        <FooterContainer>
            <IconsContainer>
               <SocialIcons><FaFacebook /></SocialIcons>
               <a href='https://github.com/dhananjaysahu79'
                   target='_blank'
                   aria-label='GitHub'>
               <SocialIcons><FaGithub /></SocialIcons>
               </a>
               <a href='https://www.linkedin.com/in/dhananjay-sahu-525b1b1a1/'
                   target='_blank'
                   aria-label='LinkedIn'>
               <SocialIcons><FaLinkedin /></SocialIcons>
               </a>
                <a href="mailto:dhananjaysahu79@gmail.com">
                  <SocialIcons><FaEnvelope /></SocialIcons>
                </a>
                <a href='https://www.instagram.com/dhananjaysahu79/'
                   target='_blank'
                   aria-label='Instagram'>
                   <SocialIcons ><FaInstagram /></SocialIcons >
                </a>
            </IconsContainer>
            <WebsiteRights>Copyright 2021 | Made by Dhananjay Sahu</WebsiteRights>
        </FooterContainer>
        </>
    );
}

export default Footer;