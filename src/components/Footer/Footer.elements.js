import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.div`
    background-color: #16194a;
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`;



export const ConnectHeading = styled.h1`
    color: #fff;
    font-weight: bold;
    font-size: 30px;
`;

export const FooterSubText = styled.p`
    color: #a9b3c1;
    margin-top: 20px;
`;

export const Form = styled.form`
    display: absolute;
    justify-content: center;
    align-items: center;
`;

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: none;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid #fff;
`;

export const SocialMedia = styled.section`
    width: 100%;
    max-width: 1000px;
`;

export const SocialIcons = styled.li`
    align-items: center;
    color: #fff;
    font-size: 24px;
    margin: 24px;
`;

export const WebsiteRights = styled.p`
    color: #fff;
    margin-bottom: 20px;
`;

export const IconsContainer = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    font-size: 30px;
`;