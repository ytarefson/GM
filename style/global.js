import css from 'styled-jsx/css';

export default css.global`
  /* @import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.scss';
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.scss'; */
  @font-face {
    font-family: 'Molot';
    src: url('/fonts/Molot/MolotRegular/MolotRegular.woff') format('woff'),
      url('/fonts/Molot/MolotRegular/MolotRegular.ttf') format('ttf'),
      url('/fonts/Molot/MolotRegular/MolotRegular.eot') format('eot');
    font-weight: 700;
    font-style: bold;
  }
  @font-face {
    font-family: 'MuseoSans';
    src: url('/fonts/MuseoSans/MuseoSansBold/MuseoSansBold.woff') format('woff'),
      url('/fonts/MuseoSans/MuseoSansBold/MuseoSansBold.ttf') format('ttf'),
      url('/fonts/MuseoSans/MuseoSansBold/MuseoSansBold.eot') format('eot');
    font-weight: 700;
    font-style: bold;
  }
  @font-face {
    font-family: 'MuseoSans';
    src: url('/fonts/MuseoSans/MuseoSansBlack/MuseoSansBlack.woff')
        format('woff'),
      url('/fonts/MuseoSans/MuseoSansBlack/MuseoSansBlack.ttf') format('ttf'),
      url('/fonts/MuseoSans/MuseoSansBlack/MuseoSansBlack.eot') format('eot');
    font-weight: 900;
    font-style: black;
  }
  @font-face {
    font-family: 'MuseoSans';
    src: url('/fonts/MuseoSans/MuseoSansMedium/MuseoSansMedium.woff')
        format('woff'),
      url('/fonts/MuseoSans/MuseoSansMedium/MuseoSansMedium.ttf') format('ttf'),
      url('/fonts/MuseoSans/MuseoSansMedium/MuseoSansMedium.eot') format('eot');
    font-weight: 500;
    font-style: medium;
  }
  @font-face {
    font-family: 'MuseoSans';
    src: url('/fonts/MuseoSans/MuseoSansRegular/MuseoSansRegular.woff')
        format('woff'),
      url('/fonts/MuseoSans/MuseoSansRegular/MuseoSansRegular.ttf')
        format('ttf'),
      url('/fonts/MuseoSans/MuseoSansRegular/MuseoSansRegular.eot')
        format('eot');
    font-weight: 300;
    font-style: bold;
  }
  @font-face {
    font-family: 'MuseoSans';
    src: url('/fonts/MuseoSans/MuseoSansItalic/MuseoSansItalic.woff')
        format('woff'),
      url('/fonts/MuseoSans/MuseoSansItalic/MuseoSansItalic.ttf') format('ttf'),
      url('/fonts/MuseoSans/MuseoSansItalic/MuseoSansItalic.eot') format('eot');
    font-weight: 500;
    font-style: italic;
  }

  body,
  html {
    --noto-font: 'MuseoSans', sans-serif;
    --molot-font: 'Molot', serif;
    --accent: #b3a764;
    --accent-red: rgb(245, 61, 64);
    --orange-color: rgb(242, 125, 14);
    --accent-dark: #3f3f3f;
    --l-grey: #e1e1e1;
    --sub-color: #9b9b9b;
    --wall-color: #ebebeb;
    --accent-grey: #727272;
    --text: #333;
    --border-radius: 7px;
    --new-gradient: linear-gradient(
      to right,
      rgb(242, 125, 14) 0%,
      rgb(237, 27, 61) 100%
    );

    --yel-red-gradient: linear-gradient(to right, #eecf32 0%, #c22328 100%);
    --red-gradient: linear-gradient(to left, #dc4622 0%, #b63b1d 100%);

    --card-shadow: 3px 3px 2px rgba(0, 0, 0, 0.1),
      -3px 3px 2px rgba(0, 0, 0, 0.1);
    --box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
    --box-shadow-up: 5px 23px 20px -15px rgba(0, 0, 0, 0.35);
    font-family: var(--noto-font);
    background: #fafafa;
    min-height: 100vh;

    --grid-gutter-width: 30px;
    --grid-columns: 12;
    --grid-breakpoints: (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px);
    --container-max-widths: (sm: 540px, md: 720px, lg: 960px, xl: 1140px);
    --gutter: var(--grid-gutter-width);
  }

  p {
    margin: 0;
    padding: 0;
  }
  nav {
    text-align: center;
    padding-top: 5px;
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
  nav > ul {
    padding: 4px 16px;
  }
  li {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: #c94f28;
    text-decoration: none;
    font-size: 13px;
  }
  a:hover {
    text-decoration: none;
    color: #cb4828;
  }
  b {
    font-weight: 700;
  }
  .header-block {
    height: 71px;
  }

  body::-webkit-scrollbar {
    width: 1.2em;
  }

  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0px 0 3px rgba(0, 0, 0, 0.2);
    background-color: #a8a8a8;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #fafafa;
    box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.2),
      0px -7px 5px -5px rgba(255, 0, 0, 0.2);
    border-radius: 3px;
    outline: 1px solid slategrey;
  }

  .home {
    display: flex;
    flex-direction: column;
  }
  .button-grey-container {
    margin-top: 30px;
  }
  .button-grey-container .button-grey {
    position: relative;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    display: block;
    font-weight: 300;
    text-align: center;
    width: 170px;
    height: 50px;
    border-radius: 30px;
    background-color: var(--accent-red);
    color: #ffffff;
    font-size: 16px;
    line-height: 50px;
    margin: 0 auto;
    box-shadow: var(--box-shadow-up);
    transition: box-shadow 0.2s ease-in;
    z-index: 1;
  }
  .button-grey-container .button-grey:hover {
    box-shadow: var(--box-shadow);
  }
  .button-grey-container .button-grey:active {
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.45);
  }
  .button-grey-container .arenda-button {
    position: relative;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    display: block;
    font-weight: 300;
    text-align: center;
    width: 170px;
    height: 40px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.05);
    color: #6d6d6d;
    font-size: 16px;
    line-height: 40px;
    margin: 0 0 0 30px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in;
  }
  .button-grey-container .arenda-button:hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }

  .button-container {
    position: relative;
    z-index: 1;
  }
  .button-container .button-min {
    z-index: 0;
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: 0;
    right: 0;
    border-top-left-radius: 15px;
    background-color: var(--accent-red);
    box-shadow: inset 5px 5px 7px rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-in;
  }
  .button-container .button-min::before {
    position: absolute;
    display: block;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(45deg);
    width: 11px;
    height: 11px;
    background-color: rgba(0, 0, 0, 0);
    border-top: 2px solid white;
    border-right: 2px solid white;
  }
  .button-container .button-min:hover {
    width: 90px;
  }
  .header-common {
    font-family: var(--noto-font);
    color: #7e7e7e;
    display: block;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin-top: 30px;
  }
  .header-red {
    font-family: var(--noto-font);
    display: block;
    font-size: 23px;
    font-weight: 700;
    line-height: 26px;
    margin-bottom: 20px;
    letter-spacing: -0.15px;
  }
  .header-razdel {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
  }

  .header-min-colored {
    font-family: var(--molot-font);
    font-size: 21px;
    font-weight: 700;
    letter-spacing: -0.2px;
    color: #474747;
    line-height: 24px;
  }
  .header-sections {
    font-family: var(--noto-font);
    color: #7e7e7e;
    display: block;
    font-size: 17px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .subheading-common {
    display: block;
    font-family: var(--noto-font);
    color: #313131;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 30px;
    margin-top: 40px;
  }
  .subheading-common-2 {
    display: block;
    color: rgb(82, 82, 82);
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 15px;
    margin-top: 15px;
    font-weight: 700;
    padding-left: 15px;
    padding-right: 15px;
  }
  .subheading-common-3 {
    display: block;
    color: #313131;
    font-size: 15px;
    letter-spacing: -0.3px;
    font-weight: 300;
    line-height: 25px;
    margin-bottom: 30px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .subheading-red-bottom {
    color: var(--accent-red);
    display: block;
    margin-bottom: 30px;
    font-weight: 700;
  }
  .subheading-red-top {
    color: var(--accent-red);
    display: block;
    margin-top: 30px;
    font-weight: 700;
  }
  .text-common {
    display: block;
    font-family: var(--noto-font);
    color: #3b3b3b;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.35px;
    margin-bottom: 0px;
  }
  .text {
    display: block;
    font-family: var(--noto-font);
    color: #535353;
    font-size: 15px;
    font-weight: 300;
    line-height: 23px;
    margin-bottom: 0px;
  }
  .text-min {
    display: block;
    font-family: var(--noto-font);
    color: #3b3b3b;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    margin-bottom: 0px;
  }
  .text-bold {
    display: block;
    font-family: var(--noto-font);
    color: #313131;
    font-size: 15px;
    font-weight: 900;
    line-height: 22px;
  }
  .text-italic {
    font-family: var(--noto-font);
    font-style: italic;
    font-size: 15px;
    line-height: 17px;
  }
  .text-black {
    color: #353535;
  }
  .section-plate {
    margin: 7px auto 7px;
    padding: 0 15px;
  }
  .bg-container {
    background-color: #e5e5e5;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
  }
  .breadcrumbs {
    margin-top: 15px;
    margin-bottom: 12px;
    margin-left: 15px;
    font-family: var(--molot-font);
    line-height: 15px;
  }
  .breadcrumbs .crambs {
    display: inline-block;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    padding-right: 3px;
    color: #3f3f3f;
    letter-spacing: 0.5px;
  }
  .breadcrumbs .cramb-main {
    color: var(--accent-red);
  }
  .mycontainer {
    width: 100%;
  }
  .color-section {
    background: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.075);
  }
  .white-section {
    background-color: #fff;
  }

  /*  */

  @media (min-width: 576px) {
    .mycontainer {
      max-width: 540px;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }
    .header-razdel {
      width: 90%;
    }
    .header-common {
      font-size: 20px;
      font-weight: 700;
      line-height: 32px;
    }
    .header-sections {
      font-size: 22px;
      font-weight: 500;
      line-height: 24px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .subheading-common {
      display: block;
      font-family: var(--noto-font);
      color: var(--accent-grey);
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 15px;
      margin-top: 15px;
    }
  }

  @media (min-width: 768px) {
    .header-common {
      font-size: 20px;
      line-height: 30px;
    }
    .header-sections {
      font-size: 28px;
      font-weight: 500;
      line-height: 24px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .header-red {
      font-size: 26px;
    }
    .header-min-colored {
      font-size: 23px;
      letter-spacing: -0.2px;
    }
    .subheading-common {
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 15px;
    }
    .mycontainer {
      max-width: 720px;
      padding-left: 15px;
      padding-right: 15px;
    }
    .header-razdel {
      font-size: 26px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: -0.6px;
    }

    .breadcrumbs {
      margin-left: 15px;
    }
    .breadcrumbs .crambs {
      font-size: 14px;
      padding-right: 3px;
    }
  }

  @media (min-width: 992px) {
    .header-block {
      height: 90px;
    }
    .header-common {
      font-size: 30px;
      line-height: 40px;
      padding-left: 100px;
      padding-right: 100px;
    }
    .tm-cont {
      display: flex;
      align-items: center;
    }
    .header-red {
      font-size: 30px;
      line-height: 32px;
    }
    .header-min-colored {
      font-size: 27px;
      letter-spacing: -0.2px;
      line-height: 32px;
    }
    .subheading-common {
      margin-bottom: 0px;
      font-size: 18px;
      line-height: 36px;
    }
    .subheading-common-2 {
      display: block;
      font-family: var(--noto-font);
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 30px;
      padding-left: 15px;
      padding-right: 15px;
    }
    .subheading-common-3 {
      display: block;
      font-family: var(--noto-font);
      color: #313131;
      font-size: 18px;
      letter-spacing: -0.6px;
      font-weight: 300;
      line-height: 32px;
      margin-bottom: 30px;
      padding-left: 15px;
      padding-right: 15px;
    }
    .mycontainer {
      max-width: 960px;
    }
    .text-common {
      font-size: 16px;
      font-weight: 300;
      line-height: 28px;
    }
    .text-italic {
      font-family: var(--noto-font);
      font-style: italic;
      font-size: 18px;
      line-height: 17px;
    }
    .text {
      display: block;
      font-family: var(--noto-font);
      color: #3b3b3b;
      font-size: 18px;
      font-weight: 300;
      line-height: 26px;
      margin-bottom: 0px;
    }
    .text-min {
      font-size: 16px;
      line-height: 23px;
    }
    .text-bold {
      font-size: 16px;
      font-weight: 700;
      line-height: 26px;
    }
    .breadcrumbs {
      margin-top: 30px;
      margin-bottom: 12px;
      margin-left: 15px;
      font-family: var(--molot-font);
      line-height: 15px;
    }
    .breadcrumbs .crambs {
      display: inline-block;
      font-size: 15px;
      font-weight: 500;
      text-transform: uppercase;
      padding-right: 3px;
      color: #3f3f3f;
      letter-spacing: 0.5px;
    }
    .breadcrumbs .cramb-main {
      color: var(--accent-red);
    }
  }

  @media (min-width: 1200px) {
    .header-block {
      height: 120px;
    }
    .button-grey-container {
      margin-top: 30px;
    }
    .button-grey-container .button-grey {
      background-color: var(--accent-red);
      color: #ffffff;
      font-size: 17px;
      line-height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 220px;
      height: 60px;
      box-shadow: 15px 25px 20px -15px rgba(237, 27, 61, 0.15),
        -15px 25px 20px -15px rgba(242, 125, 14, 0.25);
    }
    .button-grey-container .arenda-button {
      position: relative;
      width: 220px;
      height: 60px;
      text-decoration: none;
      cursor: pointer;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 300;
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.05);
      color: #6d6d6d;
      font-size: 16px;
      margin: 0 0 0 15px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2),
        inset 0 0 15px rgba(255, 255, 255, 1);
    }
    .mycontainer {
      max-width: 1140px;
    }
    .header-common {
      font-size: 36px;
      line-height: 52px;
    }
    .header-sections {
      font-size: 36px;
      font-weight: 500;
      line-height: 24px;
      margin-top: 45px;
      margin-bottom: 30px;
    }
    .header-razdel {
      font-size: 36px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: -0.6px;
    }
    .header-red {
      font-size: 40px;
      line-height: 40px;
      font-weight: 500;
      letter-spacing: -0.2px;
    }
    .header-min-colored {
      font-size: 30px;
      letter-spacing: -0.2px;
      line-height: 36px;
    }
    .subheading-common {
      font-size: 18px;
      line-height: 36px;
    }
    .text {
      display: block;
      font-family: var(--noto-font);
      color: #3b3b3b;
      color: #212529;
      font-size: 18px;
      font-weight: 300;
      line-height: 28px;
      margin-bottom: 0px;
      letter-spacing: 0.2px;
    }
    .text-min {
      display: block;
      font-family: var(--noto-font);
      color: #3b3b3b;
      font-size: 17px;
      font-weight: 300;
      line-height: 25px;
      margin-bottom: 0px;
    }
    .text-italic {
      font-family: var(--noto-font);
      font-style: italic;
      font-size: 21px;
      line-height: 22px;
    }
    .text-common {
      font-size: 18px;
      line-height: 36px;
    }
    .text-bold {
      font-size: 21px;
      line-height: 33px;
    }
    .breadcrumbs {
      margin-left: 15px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .breadcrumbs .crambs {
      font-size: 19px;
      line-height: 22px;
      padding-right: 3px;
      letter-spacing: 0.2px;
    }
  }
  @media (min-width: 1400px) {
    .header-common:after {
      width: 350px;
      left: -400px;
    }
  }

  @keyframes closeWindow {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .ril__outer {
    background-color: rgba(0, 0, 0, 0.85);
    outline: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    -ms-content-zooming: none;
    -ms-user-select: none;
    -ms-touch-select: none;
    touch-action: none;
  }

  .ril__outerClosing {
    opacity: 0;
  }

  .ril__inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .ril__image,
  .ril__imagePrev,
  .ril__imageNext {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    max-width: none;
    -ms-content-zooming: none;
    -ms-user-select: none;
    -ms-touch-select: none;
    touch-action: none;
  }

  .ril__imageDiscourager {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .ril__navButtons {
    border: none;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 20px;
    height: 34px;
    padding: 40px 30px;
    margin: auto;
    cursor: pointer;
    opacity: 0.7;
  }
  .ril__navButtons:hover {
    opacity: 1;
  }
  .ril__navButtons:active {
    opacity: 0.7;
  }

  .ril__navButtonPrev {
    left: 0;
    background: rgba(0, 0, 0, 0.2)
      url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDE5LDMgLTIsLTIgLTE2LDE2IDE2LDE2IDEsLTEgLTE1LC0xNSAxNSwtMTUgeiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==')
      no-repeat center;
  }

  .ril__navButtonNext {
    right: 0;
    background: rgba(0, 0, 0, 0.2)
      url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDEsMyAyLC0yIDE2LDE2IC0xNiwxNiAtMSwtMSAxNSwtMTUgLTE1LC0xNSB6IiBmaWxsPSIjRkZGIi8+PC9zdmc+')
      no-repeat center;
  }

  .ril__downloadBlocker {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
    background-size: cover;
  }

  .ril__caption,
  .ril__toolbar {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
  }

  .ril__caption {
    bottom: 0;
    max-height: 150px;
    overflow: auto;
  }

  .ril__captionContent {
    padding: 10px 20px;
    color: #fff;
  }

  .ril__toolbar {
    top: 0;
    height: 50px;
  }

  .ril__toolbarSide {
    height: 50px;
    margin: 0;
  }

  .ril__toolbarLeftSide {
    padding-left: 20px;
    padding-right: 0;
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ril__toolbarRightSide {
    padding-left: 0;
    padding-right: 20px;
    flex: 0 0 auto;
  }

  .ril__toolbarItem {
    display: inline-block;
    line-height: 50px;
    padding: 0;
    color: #fff;
    font-size: 120%;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ril__toolbarItemChild {
    vertical-align: middle;
  }

  .ril__builtinButton {
    width: 40px;
    height: 35px;
    cursor: pointer;
    border: none;
    opacity: 0.7;
  }
  .ril__builtinButton:hover {
    opacity: 1;
  }
  .ril__builtinButton:active {
    outline: none;
  }

  .ril__builtinButtonDisabled {
    cursor: default;
    opacity: 0.5;
  }
  .ril__builtinButtonDisabled:hover {
    opacity: 0.5;
  }

  .ril__closeButton {
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cGF0aCBkPSJtIDEsMyAxLjI1LC0xLjI1IDcuNSw3LjUgNy41LC03LjUgMS4yNSwxLjI1IC03LjUsNy41IDcuNSw3LjUgLTEuMjUsMS4yNSAtNy41LC03LjUgLTcuNSw3LjUgLTEuMjUsLTEuMjUgNy41LC03LjUgLTcuNSwtNy41IHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=')
      no-repeat center;
  }

  .ril__zoomInButton {
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PHBhdGggZD0iTTEyIDV2NiIvPjwvZz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')
      no-repeat center;
  }

  .ril__zoomOutButton {
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PC9nPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')
      no-repeat center;
  }

  .ril__outerAnimating {
    animation-name: closeWindow;
  }

  @keyframes pointFade {
    0%,
    19.999%,
    100% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
  }

  .ril__loadingCircle {
    width: 60px;
    height: 60px;
    position: relative;
  }

  .ril__loadingCirclePoint {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .ril__loadingCirclePoint::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 11%;
    height: 30%;
    background-color: #fff;
    border-radius: 30%;
    animation: pointFade 800ms infinite ease-in-out both;
  }
  .ril__loadingCirclePoint:nth-of-type(1) {
    transform: rotate(0deg);
  }
  .ril__loadingCirclePoint:nth-of-type(7) {
    transform: rotate(180deg);
  }
  .ril__loadingCirclePoint:nth-of-type(1)::before,
  .ril__loadingCirclePoint:nth-of-type(7)::before {
    animation-delay: -800ms;
  }
  .ril__loadingCirclePoint:nth-of-type(2) {
    transform: rotate(30deg);
  }
  .ril__loadingCirclePoint:nth-of-type(8) {
    transform: rotate(210deg);
  }
  .ril__loadingCirclePoint:nth-of-type(2)::before,
  .ril__loadingCirclePoint:nth-of-type(8)::before {
    animation-delay: -666ms;
  }
  .ril__loadingCirclePoint:nth-of-type(3) {
    transform: rotate(60deg);
  }
  .ril__loadingCirclePoint:nth-of-type(9) {
    transform: rotate(240deg);
  }
  .ril__loadingCirclePoint:nth-of-type(3)::before,
  .ril__loadingCirclePoint:nth-of-type(9)::before {
    animation-delay: -533ms;
  }
  .ril__loadingCirclePoint:nth-of-type(4) {
    transform: rotate(90deg);
  }
  .ril__loadingCirclePoint:nth-of-type(10) {
    transform: rotate(270deg);
  }
  .ril__loadingCirclePoint:nth-of-type(4)::before,
  .ril__loadingCirclePoint:nth-of-type(10)::before {
    animation-delay: -400ms;
  }
  .ril__loadingCirclePoint:nth-of-type(5) {
    transform: rotate(120deg);
  }
  .ril__loadingCirclePoint:nth-of-type(11) {
    transform: rotate(300deg);
  }
  .ril__loadingCirclePoint:nth-of-type(5)::before,
  .ril__loadingCirclePoint:nth-of-type(11)::before {
    animation-delay: -266ms;
  }
  .ril__loadingCirclePoint:nth-of-type(6) {
    transform: rotate(150deg);
  }
  .ril__loadingCirclePoint:nth-of-type(12) {
    transform: rotate(330deg);
  }
  .ril__loadingCirclePoint:nth-of-type(6)::before,
  .ril__loadingCirclePoint:nth-of-type(12)::before {
    animation-delay: -133ms;
  }
  .ril__loadingCirclePoint:nth-of-type(7) {
    transform: rotate(180deg);
  }
  .ril__loadingCirclePoint:nth-of-type(13) {
    transform: rotate(360deg);
  }
  .ril__loadingCirclePoint:nth-of-type(7)::before,
  .ril__loadingCirclePoint:nth-of-type(13)::before {
    animation-delay: 0ms;
  }

  .ril__loadingContainer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .ril__imagePrev .ril__loadingContainer,
  .ril__imageNext .ril__loadingContainer {
    display: none;
  }

  .ril__errorContainer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .ril__imagePrev .ril__errorContainer,
  .ril__imageNext .ril__errorContainer {
    display: none;
  }

  .ril__loadingContainer__icon {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
