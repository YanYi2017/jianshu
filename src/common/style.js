import { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';

import * as constants from './constants';

const { ON, OFF, SIM_SUN, SIM_HEI} = constants;

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

  /* 大小不定元素垂直居中 */
  .dib_vm::after {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .vm {
    vertical-align: middle;
  }
`;