import { css } from "@emotion/react";
import * as GS from "../../../theme/global";
import { mediaQueries } from "../../components/commons/libraries/MediaQueries";

export const GlobalStyle = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css");

  * {
    margin: 0px;
    box-sizing: border-box;
  }

  ${mediaQueries("tablet")} {
    .container1 {
      width: 100% !important;
    }
  }

  body {
    background-color: ${GS.base.primary};
  }
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  h1 {
    ${GS.Heading.XXXL}
  }
  h2 {
    ${GS.Heading.XXL}
  }
  h3 {
    ${GS.Heading.XL}
  }
  h4 {
    ${GS.Heading.Large}
  }
  h5 {
    ${GS.Heading.Medium}
  }

  button.gm-ui-hover-effect {
    display: none !important;
  }
  .gm-style,
  .gm-style-iw-d,
  .gm-style-iw-c {
    overflow: hidden !important;
    padding: 1.4rem;
  }
`;
