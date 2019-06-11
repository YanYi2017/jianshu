import { createGlobalStyle } from 'styled-components';

export const GlobalIconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1560271411243'); /* IE9 */
    src: url('./iconfont.eot?t=1560271411243#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1560271411243') format('woff'),
    url('./iconfont.ttf?t=1560271411243') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1560271411243#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;