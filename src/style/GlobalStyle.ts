import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
@font-face {
    font-family: 'twayair';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_tway@1.0/twayair.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  *, *::before, *::after {
    box-sizing: border-box;
    padding:0;
    margin:0;
    text-decoration : none;
    list-style: none;

  }

  html {
    width:100%;
    height: 100%;
  }

  body {
    line-height: 1;
    color: white;
    background-attachment: fixed;
    /* font-family: LL Circular,Apple SD Gothic Neo,sans-serif; */
    font-family: 'twayair';

    background-color:${({ theme }) => theme.backgroundColor.bg};
    margin: 0;
    padding: 80px 0px 0px 0px;
    width: 100%;
    height: 100%;

    transition:0.3s;

  }

  textarea{
    font-family: 'twayair';
  }

  /* input 기본 스타일 초기화 */
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input {
    border: none;
    border-bottom: 1px solid black;
    &:focus {
      outline: none;
    }
  }

  input::-webkit-file-upload-button{
    display:none
  }
  
  input::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  button{
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  body::-webkit-scrollbar {
    width: 6px;  /* 스크롤바의 너비 */
  }

  body::-webkit-scrollbar-thumb {
      height: 30%; /* 스크롤바의 길이 */
      background: #ddd; /* 스크롤바의 색상 */
      
      border-radius: 10px;
  }

  body::-webkit-scrollbar-track {
      background: #000000;  /*스크롤바 뒷 배경 색상*/
  }

`;

export default GlobalStyle;
