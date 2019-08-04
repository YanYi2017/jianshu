import { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';

import * as constants from './constants';

const { ON, OFF, SIM_SUN, SIM_HEI } = constants;

const fontFamily = theme('fontFamily', {
  [SIM_SUN]: 'Georgia,Times New Roman,Times,Songti SC,serif',
  [SIM_HEI]: '-apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif'
});

export const color = theme('mode', {
  [ON]: '#c8c8c8',
  [OFF]: '#333'
});

export const borderColor = theme('mode', {
  [ON]: '#2f2f2f',
  [OFF]: '#f0f0f0'
});

export const linkColor = theme('mode', {
  [ON]: '#969696',
  [OFF]: '#787878'
});

export const linkBorderColor = theme('mode', {
  [ON]: '#545454',
  [OFF]: '#ddd'
});

export const hoveredLinkColor = theme('mode', {
  [ON]: '#c8c8c8',
  [OFF]: '#333'
});

export const hoveredLinkBorderColor = theme('mode', {
  [ON]: '#a5a5a5',
  [OFF]: '#b4b4b4'
});

export const boxBackgroundColor = theme('mode', {
  [ON]: '#3f3f3f',
  [OFF]: '#fff'
});

export const otherBoxBackgroundColor = theme('mode', {
  [ON]: '#333',
  [OFF]: '#f1f1f1'
});

export const hoveredBoxBackgroundColor = theme('mode', {
  [ON]: '#2f2f2f',
  [OFF]: '#f5f5f5'
});

export const buttonHoverColor = theme('mode', {
  [ON]: '#555',
  [OFF]: '#ddd'
})

export const inputBackgroundColor = theme('mode', {
  [ON]: '#4f4f4f',
  [OFF]: '#eee'
});

export const inputBorderColor = theme('mode', {
  [ON]: '#2f2f2f',
  [OFF]: '#c8c8c8'
});

export const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: #333;
  }

  body, #root {
    font-family: ${fontFamily};
    background: ${boxBackgroundColor};
  }
  /* 设置盒模型 */ 
  * {
    box-sizing: border-box;
  }

  /* 重置按钮样式 */
  button {
    background: none;
    outline: none;
    border: 1px solid;
    cursor: pointer;
  }

  /* 设置b和strong */
  b, strong {
    font-weight: 700;
  }

  /* 大小不定内联元素垂直居中 */
  .dib_vm::after {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .vm {
    vertical-align: middle;
  }

  /* 栅格系统 */
  .row { width: 100%; }
  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6,
  .col-7, .col-8, .col-9, .col-10, .col-11, .col-12,
  .col-13, .col-14, .col-15, .col-16, .col-17, .col-18,
  .col-19, .col-20, .col-21, .col-22, .col-23, .col-24 {
    float: left;
  }
  .col-1 { width: 4.16667%; }
  .col-2 { width: 8.33333%; }
  .col-3 { width: 12.5%; }
  .col-4 { width: 16.66667%; }
  .col-5 { width: 20.83333%; }
  .col-6 { width: 25%; }
  .col-7 { width: 29.16667%; }
  .col-8 { width: 33.33333%; }
  .col-9 { width: 37.5%; }
  .col-10 { width: 41.66667%; }
  .col-11 { width: 45.83333%; }
  .col-12 { width: 50%; }
  .col-13 { width: 54.16667%; }
  .col-14 { width: 58.33333%; }
  .col-15 { width: 62.5%; }
  .col-16 { width: 66.66667%; }
  .col-17 { width: 70.83333%; }
  .col-18 { width: 75%; }
  .col-19 { width: 79.16667%; }
  .col-20 { width: 83.33333%; }
  .col-21 { width: 87.5%; }
  .col-22 { width: 91.66667%; }
  .col-23 { width: 95.83333%; }
  .col-24 { width: 100%; }

  .col-offset-1 { margin-left: 4.16667%; }
`;