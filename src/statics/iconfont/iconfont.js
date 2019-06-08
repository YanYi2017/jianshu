import { createGlobalStyle } from 'styled-components';

export const GlobalIconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1560002396588'); /* IE9 */
    src: url('./iconfont.eot?t=1560002396588#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1560002396588') format('woff'),
    url('./iconfont.ttf?t=1560002396588') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1560002396588#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;