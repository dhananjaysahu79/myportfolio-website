import React from 'react';
import styled from 'styled-components';

export const Infosec = styled.div`
  color: #fff;
  padding: ${({padd}) => padd ? padd : '160px'} 0;
  background: ${({bgColor}) => bgColor};
`;

export const InfoRow = styled.div`
   display: flex;
   margin: 0 -15px -15px -15px;
   flex-wrap: wrap;
   align-items: center;
   flex-direction: ${({imgStart}) => imgStart ? 'row-reverse' : 'row'};
   @media screen and (max-width: 768px){
    justify-content: center;
   }
`;

export const InfoColumn = styled.div`
   margin-bottom: 15px;
   padding-right: 20px;
   padding-left: 15px;
   flex: 1;
   max-width: 50%;
   flex-basis: 50%;

   @media screen and (max-width: 768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
   }
`;


export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 950px){
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1': '#4b59f7')};
  font-size: 18px;
  line-height: 16px;
  display: inline;
  font-weight: 500;
  letter-spacing: 1.5px;
  margin-bottom: 26px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: 600;
  margin-top: 16px;
  color: ${({ lightText }) =>( lightText ? '#f7f8fa' : '#3432AD')};
`;

export const Subtitle = styled.p`
  color: ${({ lightTextDesc }) => ( lightTextDesc ? '#a9b3c1': '#1c2237')};
  max-width: 440px;
  margin-bottom: ${({b}) => b ? b : '35px'};
  font-size: 18px;
  line-height: 24px;
  word-spacing: 0.1rem;
  margin-left: ${({descMargin}) => descMargin};
`;

export const ImgWrapper = styled.div`
  max-width: 555px;

  justify-content: ${({start}) => start ? 'flex-start' : 'flex-end'};
  display: flex;
  /* &:hover{
    div{
      display: block
    }
  } */
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  border-radius: 4px;

  /* &:hover{
    filter: blur(8px);
    -webkit-filter: blur(8px);
  } */
`;

export const ImgText = styled.div`
  padding: 40px;
  position: absolute;
  display: none;
  max-width: 500px;
  text-align: center;
  align-items: center;
`;

export const DescTitle = styled.h3`
  font-weight: bold;
  color: black;
  margin-bottom: 1rem;
  font-size: 22px;
`;

export const Card = styled.div`
  border-radius: 4px;
  background: linear-gradient(to top left, ${({color1}) => color1}, ${({color2}) => color2});
  margin-bottom: 20px;
  padding: 15px 15px 0px 15px;
  color: #fff;
  &:hover{
      transform: scale(1.06);
      transition: all 0.3s ease-out;
      color: #1c2237;
  }
`;

export const SkillTitle = styled.h3`
  font-weight: bold;
  /* color: ${({scolor}) => scolor }; */
  color: white;
  margin-bottom: 1rem;
  letter-spacing: 1;
  font-size: 21px;
`;

export const SkillDesc = styled.p`
  font-size: 16px;
  line-height: 24px;
  word-spacing: 0.1rem;
  color: #fff;
  /* margin-left: ${({descMargin}) => descMargin}; */
`;

export const HorizBar = styled.div`
  max-width: 30%;
  height: 3px;
  background: #fff;
  border-radius: 1px;
  margin-top: 20px;
`;

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media screen and (max-width: 1220px){
    flex-direction: column;
  }
`;

export const ToolsImg = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 50%;
    vertical-align: middle;
    display: inline-block;
    border-radius: 4px;
    max-width: 120px;
`;

export const ToolWrapper = styled.div`
  align-items: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  display: absolute;
`;

export const ToolText = styled.h3`
  font-weight: bold;
  color: black;
  font-size: 22px;
  margin-top: 1rem;
`;

export const BadgeText = styled.h1`
  font-weight: bold;
  color: black;
  font-size: 35px;
  padding: 20px;
`;

export const HRContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const SkillHead = styled.h1`
    color: #fff;
    font-size: 48px;
    margin-bottom: 50px;
    @media screen and (max-width: 768px){
      text-align: center;
   }
`;

export const ButtText = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: normal;
  font-size: 18px;
`;