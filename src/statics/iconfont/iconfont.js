import { createGlobalStyle } from 'styled-components';

export const GlobalIconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1560095685586'); /* IE9 */
    src: url('./iconfont.eot?t=1560095685586#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1560095685586') format('woff'),
    url('./iconfont.ttf?t=1560095685586') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1560095685586#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;