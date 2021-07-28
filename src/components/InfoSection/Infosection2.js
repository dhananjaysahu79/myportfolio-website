import React from 'react';
import {Container} from '../../globalStyles';
import {
  Infosec,
  Card,
  InfoRow,
  InfoColumn,
  TextWrapper,
  SkillHead,
  ImgWrapper,
  Img,
  SkillTitle,
  SkillDesc,
  HorizBar
} from './Infosection.elements';

function InfoSection2({
  primary,
  bgColor,
  lightTopLine,
  skillTitle1,
  skillTitle2,
  skillTitle3,
  scolor1,
  scolor2,
  scolor3,
  descMargin,
  lightTextDesc,
  subtitle1,
  subtitle2,
  subtitle3,
  start,
  img,
  alt
}){
  return(
      <>
        <Infosec bgColor = {bgColor} jus = {'center'}>
          <Container>
          <SkillHead>What I do?</SkillHead>
          <InfoRow>
            <InfoColumn >
             <InfoRow >
             <Card color1 = {'#280B5B'} color2 = {'#3C52ED'}>
                <TextWrapper>
                    <SkillTitle scolor = {scolor1}>{skillTitle1}</SkillTitle>
                    <SkillDesc descMargin = {descMargin} >{subtitle1}</SkillDesc>
                    <HorizBar></HorizBar>
                </TextWrapper>
                </Card>
                <Card color1 = {'#3A1272'} color2 = {'#B7217E'}>
                    <TextWrapper>
                    <SkillTitle scolor = {scolor2}>{skillTitle2}</SkillTitle>
                    <SkillDesc descMargin = {descMargin}>{subtitle2}</SkillDesc>
                    <HorizBar></HorizBar>
                    </TextWrapper>
                </Card>
                <Card color1 = {'#411882'} color2 = {'#992CD9'}>
                    <TextWrapper>
                    <SkillTitle scolor = {scolor3}>{skillTitle3}</SkillTitle>
                    <SkillDesc descMargin = {descMargin} >{subtitle3}</SkillDesc>
                    <HorizBar></HorizBar>
                    </TextWrapper>
                </Card>
             </InfoRow>
            </InfoColumn>
            <InfoColumn>
                <ImgWrapper start = {start}>
                    <Img src={img} alt={alt}/>
                    {/* <ImgText>Ofcourse! this is not mine. I can't afford it lol :( It's my dream tho.</ImgText> */}
                </ImgWrapper>
            </InfoColumn>
            </InfoRow>
          </Container>
        </Infosec>
      </>
  );
}

export default InfoSection2;