import styled from 'styled-components';

export const ProjectSection = styled.div`
    padding: 100px 0 100px;
    background: #16194a;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin: 0 auto;

    @media screen and (max-width: 960px){

    }
`;
export const Heading = styled.h1`
    color: #fff;
    font-size: 48px;
`;

export const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 45px;
    @media screen and (max-width: 1040px){
      flex-direction: column;
    }
`;

export const ProjectCard = styled.div`
    height: 500px;
    width: 300px;
    background: #01042F;
    box-shadow: 0 6px 20px rgba(156 , 25 , 255 , 0.1);
    text-decoration: none;
    border-radius: 4px;
    padding: 10px;
    &:nth-child(2){
        margin: 24px;
    }
    &:hover{
        transform: scale(1.06);
        transition: all 0.3s ease-out;
        color: #1c2237;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    align-items: start;
    color: #fff;
`;

export const CardImg = styled.img`
    padding: 0 20px 10px 0px;
    border: 0;
    width: 300px;
    vertical-align: middle;
    display: inline-block;
`;
export const HorizBar = styled.div`
    width: 80px;
    height: 3px;
    background: #fff;
    border-radius: 1px;
    margin-top: 15px;
`;

export const ProjectDesc = styled.p`
    font-size: 14px;
    line-height: 20px;
    word-spacing: 1px;
    color: #a9b3c1;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ButtText = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: normal;
  font-size: 16px;
`;

