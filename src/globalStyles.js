import styled , {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
     box-sizing: border-box;
     padding: 0px;
     margin: 0px;
     font-family: 'Roboto Mono', monospace;
  }
`;

export const Container = styled.div`
   z-index: 1;
   width: 100%;
   /* background: cyan; */
   max-width: 1300px;
   margin-right: auto;
   margin-left: auto;
   padding-right: 50px;
   padding-left: 50px;
`;

export const Button = styled.button`
   border-radius: 4px;
   background: linear-gradient(to right, #3432AD, #5274D8);
   padding: ${({ big }) => big ? '12px 64px' : '10px 20px'};
   font-size: ${({ fontbig }) => fontbig ? '20px' : '16px'};
   white-space: nowrap;
   outline: none;
   border: none;
   cursor: pointer;
   color: #fff;

   &:hover{
      transition: all 0.3s ease-in;
      color: #fff;
      background: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')};
   }

   @media screen and (max-width: 850px){
      width: 100%;
   }
`;

export default GlobalStyle;