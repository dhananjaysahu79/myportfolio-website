import React from 'react';
import {Container} from '../../globalStyles';
import Carousel from 'react-elastic-carousel';
import {
  Infosec,
  ToolsImg,
  InfoColumn,
  TextWrapper,
  ToolWrapper,
  ToolText
} from './Infosection.elements';
function InfoTools({
  primary,
  lightBg,
  reactblack,
  fluttercolor,
  fbase_black,
  fbase_color,
  htmlcolor,
  py_black,
  py_color,
  mongo_clr,
  react_color,
  flutter_black,
}){
  return(
      <>
        <Infosec lightBg = {lightBg} padd = {'25px'}>
           <Container>
               <Carousel>
                <ToolWrapper>
                <ToolsImg src = {react_color}></ToolsImg>
                <ToolText>React.js</ToolText>
                </ToolWrapper>
                <ToolWrapper>
                <ToolsImg src = {fluttercolor}></ToolsImg>
                <ToolText>Flutter</ToolText>
                </ToolWrapper>
                <ToolWrapper>
                <ToolsImg src = {fbase_color}></ToolsImg>
                <ToolText>Firebase</ToolText>
                </ToolWrapper>
                <ToolWrapper>
                <ToolsImg src = {htmlcolor}></ToolsImg>
                <ToolText>HTML5</ToolText>
                </ToolWrapper>
                <ToolWrapper>
                <ToolsImg src = {py_color}></ToolsImg>
                <ToolText>Python</ToolText>
                </ToolWrapper>
                <ToolWrapper>
                <ToolsImg src = {mongo_clr}></ToolsImg>
                <ToolText>MongoDB</ToolText>
                </ToolWrapper>
               </Carousel>
           </Container>
        </Infosec>
      </>
  );
}

export default InfoTools;