import React from 'react';
import {Button} from '../../globalStyles';
import {
  ProjectSection,
  ProjectWrapper,
  Heading,
  ProjectContainer,
  ProjectCard,
  CardWrapper,
  CardImg,
  HorizBar,
  ProjectDesc
}from './Project.elements';

function Project(){
 return (
    <ProjectSection>
     <ProjectWrapper>
      <Heading>Projects</Heading>
        <ProjectContainer>

           <ProjectCard>
             <CardWrapper>
               <CardImg src = {'https://drive.google.com/uc?export=download&id=1L1YCtKJqgp3jBVa5-7_ZUST64LH72eFF'}>
               </CardImg>
               <h3>Deskpixel-Wallpaper & Photos</h3>
               <HorizBar></HorizBar>
               <ProjectDesc>An Android application built with the help of Flutter,Cloud Firestore and GoogleDrive. Deskpixel is a wallpaper cum photos app which contains around a million photos that are clicked by users across the globe. </ProjectDesc>
               <Button>Read More</Button>
             </CardWrapper>
           </ProjectCard>
           <ProjectCard>
             <CardWrapper>
               <CardImg src = {'https://drive.google.com/uc?export=download&id=1tMouokzf-4w5FYyR5i8JVynlMrG62pb4'}>
               </CardImg>
               <h3>Covid-19 Tracker App (Open Api's)</h3>
               <HorizBar></HorizBar>
               <ProjectDesc>An Android application built with the help of Flutter and some open source Api's(Rapid Api and Covid19India.org Api). The App collect data from two Api's and brings it to the user. It shows detailed data of India specific regions. </ProjectDesc>
               <Button>Check Out</Button>
             </CardWrapper>
           </ProjectCard>
           <ProjectCard>
             <CardWrapper>
               <CardImg src = {'https://drive.google.com/uc?export=download&id=14msWKuJyGphlH2w1B9liX-S1VANkv5o7'}>
               </CardImg>
               <h3>SpamCleaner (F the Dragon)</h3>
               <HorizBar></HorizBar>
               <ProjectDesc>Andoid app to remove spam apps from your device.This project only helps you to guide how to detect spam apps if you know the list of spam apps.These types of apps got limelight when Government of India banned some apps for security purposes.</ProjectDesc>
               <Button>Check Out</Button>
             </CardWrapper>
           </ProjectCard>

        </ProjectContainer>
     </ProjectWrapper>
    </ProjectSection>
 );
}

export default Project;