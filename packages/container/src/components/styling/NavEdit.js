import { make-styles } from @material-ui/core/styles';

const use-styles = make-styles((theme) => ({
yellowBg {
  background-color: #ffd343;
}

whiteBg {
  background-color: #fff;
}

appBar1 {
  border-bottom: 1px solid #0c0a89;
  margin-bottom: 0px;
}

toolbar1 {
  height: 75px;
  
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 1;
  font-family: Barlow, sans-serif;

  @media screen and (max-width: 991px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0px 3%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
}

nav-item {
  margin: 0px;
  padding: 0px;
}

nav-itemOptional {
  @media screen and (max-width: 479px) {
    display: none!important;
  }
}

nav-itemSm {
  @media screen and (min-width: 767px) {
    display: none!important;
  }
  @media screen and (max-width: 766px) {
    display: inline-block!important;
  }
}

nav-itemMd {
  @media screen and (min-width: 767px) {
    display: inline-block!important;
  }
  @media screen and (max-width: 766px) {
    display: none!important;
  }
}

linkButton {
  margin: theme.spacing(1, 1.5);
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898EC;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
}

navbar2 {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  z-index: 100;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  min-height: auto;
  margin-top: 0px;
  padding: 0px 6%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #ffd343;
  opacity: 1;
  font-family: Barlow, sans-serif;
  
  @media screen and (max-width: 991px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0px 3%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  @media screen and (max-width: 767px) {
    min-height: auto;
    padding: 2px 3%;
  }
}

wNav {
  position: relative;
  z-index: 1000;

  &:before {
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
  }

  &:after {
    clear: both;
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
  }

  &[data-collapse="all"] {
    "&$wNavMenu" {
        display: none;
    }

    &$wNavButton {
        display: block;
    }
  }
}

wNavBrand {
  position: relative;
  float: left;
  text-decoration: none;
  color: #333333;
}

nav-container {
  position: -webkit-sticky;
  position: sticky;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: none;
  min-height: auto;
  margin-right: 0px;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 0%;
  padding-left: 0%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  
  opacity: 1;
  font-family: Barlow, sans-serif;

  @media screen and (max-width: 991px) {
    width: 100%;
    max-height: 65px;
    max-width: 100%;
    min-height: 65px;
    padding-right: 0%;
    padding-left: 0%;
  }

  @media screen and (max-width: 767px) {
    min-height: auto;
  }
}

wNavMenu {
  position: relative;
  float: right;
}
  
wNavButton {
  position: relative;
  float: right;
  padding: 18px;
  font-size: 24px;
  display: none;
  cursor: pointer;
  -webkitTapHighlight-color: rgba(0, 0, 0, 0);
  tapHighlight-color: rgba(0, 0, 0, 0);
  -webkitUserSelect: none;
  -mozUserSelect: none;
  -msUserSelect: none;
  userSelect: none;
  
  &:focus {
    outline: 0;
  }
  
  &:open {
    background-color: #C8C8C8;
    color: white;
  }
}
  
brand2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 75px;
  padding: 0px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  @media screen and (max-width: 991px) {
    vertical-align: middle;
    width: 152px;
  }

  @media screen and (max-width: 767px) {
    height: auto;
  }
}

logo {
  max-width: 80%;
  margin-top: 5px;

  @media screen and (max-width: 767px) {
    max-width: 80%;
  }
}
  
section11 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: auto;
  max-width: none;
  padding: 95px 6%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  
  &.yellowBg {
    background-color: #ffd343;
  }
  
  &.contactV2Section {
    background-color: #ffd343;
  }

  @media screen and (max-width: 991px) {
    padding: 50px 5% 65px;
  }
}

wButton {
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898EC;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
}

buttonsUl {
  display: inline-block;
  margin: 4px;
  padding: 0px;
}

outlinedButton {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 20px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px;
  border-color: #15113b;
  border-radius: 3px;
  background-color: transparent;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  font-family: 'Playfair Display', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  
  &:hover {
    margin-left: 0px;
    border-color: transparent;
    background-color: #ffd343;
    box-shadow: 1px 1px 12px 0 rgba(0, 0, 0, 0.08);
    -webkit-transform: translate(2px, 0px);
    -ms-transform: translate(2px, 0px);
    transform: translate(2px, 0px);
    color: #000;
    text-decoration: none;
  }
  
  &.displayBlock {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: 16px;
    
    &:hover {
      border-color: #09d5b0;
      background-color: #09d5b0;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
    }
  }
}
    
introButton {
  margin-left: 15px;
  border-color: #15113b;
  color: #0c0a89;
  
  &:hover {
    background-color: #15113b;
    -webkit-transform: translate(0px, -3px);
    -ms-transform: translate(0px, -3px);
    transform: translate(0px, -3px);
    color: #fff;
  }
}

darkOutline {
  margin-top: 0px;
  border-color: #0c0a89;
  color: #0c0a89;
  font-weight: bold;

  &:hover {
    border-color: transparent;
    background-color: #15113b;
    box-shadow: none;
    -webkit-transform: translate(5px, 0px);
    -ms-transform: translate(5px, 0px);
    transform: translate(5px, 0px);
    color: #fff;
  }
}

dropdownLink {
  display: none;
  color: #0c0a89;

  @media screen and (max-width: 767px) {
    display: block;
  }
}

dropdownMenu {
  display: flex;
  flex-direction: row;
  list-styleType: none;
  margin: 0;
  padding: 0;

  & < li {
    margin: 0 1rem;
    overflow: hidden;
  }
  
  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    margin-top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    
    & > li {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      background-color: #222;
    }

    & > li:not(:last-child) {
      border-bottom: 1px solid #444;
    }
  }
}

dropdownMenuLi {
  margin: 0 1rem;
  overflow: hidden;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: white;
    background-color: #222;

    &:not(:last-child) {
      border-bottom: 1px solid #444;
    }
  }
}

dropdownMenu-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
  }
}

menuToggle {
  display: none;

  &:checked {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  &:checked + $dropdownMenu-container {
    background-color: "#ccc"
  }

  &:checked + $dropdownMenu-container &$dropdownMenuButton {
    background: rgba(255, 255, 255, 0);
  }

  &:checked + $dropdownMenu-container &$dropdownMenuButton::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  @media (max-width: 767px) {
    & ~ $dropdownMenuLi {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    &:checked ~ $dropdownMenuLi {
      border: 1px solid #333;
      height: 2.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
}

dropdownMenuButton {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;

  &::before {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;

    content: '';
    margin-top: -8px;
  }
  &::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;

    content: '';
    margin-top: 8px;
  }

  &::before &$menuToggle:checked {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  &$menuToggle:checked + $dropdownMenu-container {

  }
}

navSelect {
  background: #000 !important;
}

}));

export default use-styles