import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Button} from '../../globalStyles';


import {
  Infosec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  ImgText,
  DescTitle,
  HorizBar,
  ButtText
} from './Infosection.elements';

function InfoSection1({
  primary,
  bgColor,
  lightTopLine,
  lightText,
  lightTextDesc,
  topLine,
  headLine,
  subtitle1,
  descTitle1,
  descMargin,
  description1,
  description2,
  descTitle2,
  description3,
  buttonLabel,
  path,
  imgStart,
  img,
  alt,
  start,
  limk
}){
    return(
      <>
       <Infosec bgColor = {bgColor}>
         <Container>
          <InfoRow imgStart ={imgStart}>
             <InfoColumn>
                <TextWrapper>
                    <TopLine lightTopLine ={lightTopLine}>{topLine}</TopLine>
                    <Heading lightText = {lightText}>{headLine}</Heading>
                    <Subtitle lightTextDesc = {lightTextDesc}>{subtitle1}</Subtitle>
                    <DescTitle>{descTitle1}</DescTitle>
                    <Subtitle descMargin = {descMargin} b = {'25px'}lightTextDesc = {lightTextDesc}>{description1}</Subtitle>
                    <Subtitle descMargin = {descMargin} lightTextDesc = {lightTextDesc}>{description2}</Subtitle>
                    <DescTitle>{descTitle2}</DescTitle>
                    <Subtitle descMargin = {descMargin} lightTextDesc = {lightTextDesc}>{description3}</Subtitle>
                    <Button big = 'True'>
                      <ButtText href = {limk}
                        target = '_blank'>
                        {buttonLabel}
                      </ButtText>
                  </Button>
                </TextWrapper>
             </InfoColumn>
             <InfoColumn>
               <ImgWrapper start = {start}>
                  <Img src={img} alt={alt}/>

               </ImgWrapper>
               </InfoColumn>
          </InfoRow>
        </Container>
       </Infosec>
      </>
    );
}

export default InfoSection1;