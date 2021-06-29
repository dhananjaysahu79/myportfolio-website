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
               <SocialIcons><FaGithub /></SocialIcons>
               <SocialIcons><FaLinkedin /></SocialIcons>
               <SocialIcons><FaEnvelope /></SocialIcons>
               <SocialIcons><FaInstagram /></SocialIcons>
            </IconsContainer>
            <WebsiteRights>Copyright 2021 | Made by Dhananjay Sahu</WebsiteRights>
        </FooterContainer>
        </>
    );
}

export default Footer;