
const use-styles = make-styles((theme) => ({
frame: {
  padding: 0px;
  //gap: 8px;
  
  margin: 50px 5px;
  //margin-bottom: 50px;

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
  
  flex-direction: row;
};

/* All Companies */
headingA: {
  padding-bottom: 15px;
  margin-bottom: 15px;

  height: 40px;
  font-family: Overpass;
  font-style: normal;
  font-weight: 900;
  font-size: 2.5vw;
  line-height: 45px;
  white-space: nowrap;
  /* identical to box height; or 111% */
  letter-spacing: -0.03em;
  /* Blacks/001 */
  color: #091540;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
};

/* You have 15 companies in your portfolio. */
subHeadingA: {
  padding: 0;
  margin: 0;

  font-family: Overpass;
  font-style: normal;
  font-weight: 400;
  font-size: 1.15vw;
  line-height: 28px;
  /* identical to box height; or 175% */
  letter-spacing: -0.02em;
  /* Grays/001 */
  color: #3E3D5C;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
};

/* Button */
addCompanyButton: {
  flex: 1;

  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  position: absolute;
  width: 201px;
  height: 44px;
  right: 120px;
  top: 197px;
  /* Primary */
  background: #08048C;
  /* Primary */
  border: 1.8px solid #08048C;
  border-radius: 10px;
};

/* plus */
buttonPlusSign: {
  display: none;
  width: 16px;
  height: 16px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
};

/* Vector */
buttonVector: {
  position: absolute;
  left: 12.5%;
  right: 12.5%;
  top: 12.5%;
  bottom: 12.5%;
  /* Whites / White */
  border: 1.8px solid #FFFFFF;
};


/* Add a new company */
button-text: {
  width: 133px;
  height: 20px;

  font-family: Overpass;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height; or 133% */
  letter-spacing: -0.02em;
  color: #FFFFFF;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
};

headingDiv: {
  padding: 10px 30px;
};
}))

// ButtonWorkflow
const use-styles = make-styles((theme) => ({
buttonsUl4: {
  display: inline-block;
  margin: 4px;
  padding: 0px;
};

outlinedButton4: {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  min-width: 120px!important;

  margin-top: 20px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px;
  border-color: #15113b;
  border-radius: 16px;
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
    box-shadow: 1px 1px 12px 0 rgba(0; 0; 0; 0.08);
    -webkit-transform: translate(2px; 0px);
    -ms-transform: translate(2px; 0px);
    transform: translate(2px; 0px);
    color: #000;
    text-decoration: none;
  };
};


wButton4: {
  min-height: 35px;

  flex: 0 0 auto;

  padding: 11px 30px 11px 15px;
  margin: 0 auto;
  
  align: center;
  vertical-align: middle;

  background-color: #0c0a89;
  color: white;
  border-color: #0c0a89;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  
  &:hover {
    margin-left: 0px;
    border-color: transparent;
    background-color: #15113b;
    box-shadow: 1px 1px 12px 0 rgba(0; 0; 0; 0.08);
    -webkit-transform: translate(5px; 0px);
    -ms-transform: translate(5px; 0px);
    transform: translate(5px; 0px);
    color: #fff;
    text-decoration: none;
  };

  [theme.breakpoints.down(767)]: {
    max-width: 50px;
  };
};


/* plusCircle */
buttonPlusCircle: {
  width: 20px;
  height: 20px;
  left: 50%;
  top: 50%;

  vertical-align: middle;
};

/* Add a new company */
button-text: {
  margin-left: 6%;
  margin-top: 5px;
  margin-bottom: 5px;

  font-family: Overpass;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  /* identical to box height; or 133% */
  letter-spacing: -0.02em;
  color: #FFFFFF;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;

  [theme.breakpoints.down(767)]: {
    display: none;
  };
};

divButton: {
  position: relative;
  vertical-align: middle;
  white-space: nowrap;

  display: flex;
  justify-content: center;
  align-items: center;
};
}))

// EditProfile
const use-styles = make-styles((theme) => ({
buttonsUl4: {
  display: inline-block;
  margin: 4px;
  padding: 0px;
};

outlinedButton6: {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  min-width: 120px!important;

  margin-top: 20px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px;
  border-color: #15113b;
  border-radius: 16px;
  background-color: transparent;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  font-family: Playfair Display, sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  
  &:hover {
    margin-left: 0px;
    border-color: transparent;
    background-color: #ffd343;
    box-shadow: 1px 1px 12px 0 rgba(0; 0; 0; 0.08);
    -webkit-transform: translate(2px; 0px);
    -ms-transform: translate(2px; 0px);
    transform: translate(2px; 0px);
    color: #000;
    text-decoration: none;
  };
};


wButton6: {
  min-height: 35px;

  flex: 0 0 auto;

  display: inline-block;
  //padding: 11px 30px 11px 15px;
  margin: 0;
  width: 100%;

  vertical-align: middle;

  // background-color: #0c0a89;
  // color: white;
  // border-color: #0c0a89;
  // border-radius: 8px;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    margin-left: 0px;
    // background-color: #15113b;
    // color: #fff;
    // box-shadow: 1px 1px 12px 0 rgba(0; 0; 0; 0.08);
    // webkit-transform: translate(2px; 0px);
    // ms-transform: translate(2px; 0px);
    // transform: translate(2px; 0px);
    text-decoration: none;
  };

  [theme.breakpoints.down(479)]: {
    max-width: 50px;
  };
};


/* plusCircle */
editIcon-style: {
  width: 15px;
  height: 15px;
  left: 50%;
  top: 50%;

  vertical-align: middle;

  [theme.breakpoints.down(479)]: {
    vertical-align: top;
  };
};

/* Add a new company */
button-text: {
  width: 88px;
  height: 20px;
  margin-left: 6%;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 0;

  vertical-align: center;
  color: #08048C;

  font-family: Overpass;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  /* identical to box height; or 133% */
  letter-spacing: -0.02em;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;

  [theme.breakpoints.down(479)]: {
    display: none;
  };
};

divButton: {
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
  align: center;
  width: 100px;

  margin: 0;
  padding: 0;
};
}))

// OutlinedButton
const use-styles = make-styles((theme) => ({
buttonsUl4: {
  display: inline-block;
  margin: 4px;
  padding: 0px;
};

outlinedButton5: {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  align: center;
  width: 150px;

  padding: 11px 30px 9px 15px;
  height: 100%;
  margin-bottom: 0px;

  border-style: solid;
  border-width: 1px;
  border-color: #08048C;
  border-radius: 16px;

  background-color: transparent;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  font-family: 'Playfair Display', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #08048C!important;
  
  &:hover {
    margin-left: 0px;
    // border-color: transparent;
    // background-color: #08048C;
    // color: #ffffff!important;
    border-width: 3px;
    box-shadow: 1px 1px 12px 0 rgba(0; 0; 0; 0.08);
    -webkit-transform: translate(2px; 0px);
    -ms-transform: translate(2px; 0px);
    transform: translate(2px; 0px);
    text-decoration: none;
    cursor: pointer;
  };
};

/* plusCircle */
buttonPlusCircle5: {
  width: 20px;
  height: 20px;
  left: 50%;
  top: 50%;

  vertical-align: middle;
};

hideButton5: {
  display: none!important;
};

divButton5: {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  vertical-align: middle;
  white-space: nowrap;
  min-height: 35px;

  width: fit-content;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;
};
}))

// Logo
const use-styles = make-styles((theme) => ({
yellowBg: {
  background-color: #ffd343;
};

whiteBg: {
  background-color: #fff;
};

appBar1: {
  border-bottom: `1px solid #0c0a89`;
  margin-bottom: 0px;
};

toolbar1: {
  height: 75px;
  
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 1;
  font-family: Barlow, sans-serif;

  @media screen and (max-width: 991px): {
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
  };
};

navItem: {
  margin: 0px;
  padding: 0px;
};

navItemOptional: {
  @media screen and (max-width: 479px): {
    display: none!important;
  };
};

navItemSm: {
  @media screen and (min-width: 767px): {
    display: none!important;
  };
  @media screen and (max-width: 766px): {
    display: inline-block!important;
  };
};

navItemMd: {
  @media screen and (min-width: 767px): {
    display: inline-block!important;
  };
  @media screen and (max-width: 766px): {
    display: none!important;
  };
};

linkButton: {
  margin: theme.spacing(1; 1.5);
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898EC;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
};

navbar2: {
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
  
  @media screen and (max-width: 991px): {
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
  };

  @media screen and (max-width: 767px): {
    min-height: auto;
    padding: 2px 3%;
  };
};

wNav: {
  position: relative;
  //background: #dddddd;
  z-index: 1000;

  &:before {
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
  };

  &:after {
    clear: both;
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
  };

  &[data-collapse="all"]: {
    &$wNavMenu: {
        display: none;
    };

    &$wNavButton: {
        display: block;
    };
  };
};

wNavBrand: {
  position: relative;
  float: left;
  text-decoration: none;
  color: #333333;
};

navContainer: {
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

  @media screen and (max-width: 991px): {
    width: 100%;
    max-height: 65px;
    max-width: 100%;
    min-height: 65px;
    padding-right: 0%;
    padding-left: 0%;
  };

  @media screen and (max-width: 767px): {
    min-height: auto;
  };
};

wNavMenu: {
  position: relative;
  float: right;
};
  
wNavButton: {
  position: relative;
  float: right;
  padding: 18px;
  font-size: 24px;
  display: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0; 0; 0; 0);
  tap-highlight-color: rgba(0; 0; 0; 0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  &:focus: {
    outline: 0;
  };
  
  &:open: {
    background-color: #C8C8C8;
    color: white;
  };
};
  
brand2: {
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

  @media screen and (max-width: 991px): {
    vertical-align: middle;
    width: 152px;
  };

  @media screen and (max-width: 767px): {
    height: auto;
  };
};

logo: {
  max-width: 80%;
  margin-top: 5px;

  @media screen and (max-width: 767px): {
    max-width: 80%;
  };
};
  
section11: {
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
  
  &.yellowBg: {
    background-color: #ffd343;
  };
  
  &.contactV2Section: {
    background-color: #ffd343;
  };

  @media screen and (max-width: 991px): {
    padding: 50px 5% 65px;
  };
};

wButton: {
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898EC;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
};

buttonsUl: {
  display: inline-block;
  margin: 4px;
  padding: 0px;
};

outlinedButton: {
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
    box-shadow: 1px 1px 12px 0 rgba(0; 0; 0; 0.08);
    -webkit-transform: translate(2px; 0px);
    -ms-transform: translate(2px; 0px);
    transform: translate(2px; 0px);
    color: #000;
    text-decoration: none;
  };
  
  &.displayBlock: {
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
    };
  };
};
    
introButton: {
  margin-left: 15px;
  border-color: #15113b;
  color: #0c0a89;
  
  &:hover {
    background-color: #15113b;
    -webkit-transform: translate(0px; -3px);
    -ms-transform: translate(0px; -3px);
    transform: translate(0px; -3px);
    color: #fff;
  };
};

darkOutline: {
  margin-top: 0px;
  border-color: #0c0a89;
  color: #0c0a89;
  font-weight: bold;

  &:hover {
    border-color: transparent;
    background-color: #15113b;
    box-shadow: none;
    -webkit-transform: translate(5px; 0px);
    -ms-transform: translate(5px; 0px);
    transform: translate(5px; 0px);
    color: #fff;
  };
};

dropdown-link: {
  display: none;
  color: #0c0a89;

  @media screen and (max-width: 767px): {
    display: block;
  };
};

dropdownMenu: {
  display: flex;
  flex-direction: row;
  list-styleType: none;
  margin: 0;
  padding: 0;

  & < li: {
    margin: 0 1rem;
    overflow: hidden;
  };
  
  @media (max-width: 767px): {
    position: absolute;
    top: 0;
    margin-top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    
    & > li: {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      background-color: #222;
    };

    & > li:not(:last-child): {
      border-bottom: 1px solid #444;
    };
  };
};

dropdownMenuLi: {
  margin: 0 1rem;
  overflow: hidden;

  @media (max-width: 767px): {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: white;
    background-color: #222;

    &:not(:last-child): {
      border-bottom: 1px solid #444;
    };
  };
};

dropdownMenuContainer: {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px): {
    display: flex;
  };
};

menuToggle: {
  display: none;

  &:checked: {
    margin-top: 0px;
    transform: rotate(405deg);
  };

  &:checked + $dropdownMenuContainer: {
    background-color: "#ccc"
  };

  &:checked + $dropdownMenuContainer &$dropdownMenuButton: {
    background: rgba(255; 255; 255; 0);
  };

  &:checked + $dropdownMenuContainer &$dropdownMenuButton::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  };

  @media (max-width: 767px): {
    & ~ $dropdownMenuLi: {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23; 1; 0.32; 1);
    };

    &:checked ~ $dropdownMenuLi: {
      border: 1px solid #333;
      height: 2.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23; 1; 0.32; 1);
    };
  };
};

dropdownMenuButton: {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23; 1; 0.32; 1);
  border-radius: 2px;

  &::before {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23; 1; 0.32; 1);
    border-radius: 2px;

    content: "";
    margin-top: -8px;
  };
  &::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23; 1; 0.32; 1);
    border-radius: 2px;

    content: "";
    margin-top: 8px;
  };

  &::before &$menuToggle:checked: {
    margin-top: 0px;
    transform: rotate(405deg);
  };

  &$menuToggle:checked + $dropdownMenuContainer: {

  };
};

nav-select: {
  background: #000 !important;
};

}));

// NavbarContainer
const use-styles = make-styles((theme) => ({
yellowBg: {
  background-color: #ffd343;
};

whiteBg: {
  background-color: #fff;
};

appBar1: {
  border-bottom: 1px solid #0c0a89;
  margin-bottom: 0px;
};

toolbar1: {
  height: 75px;
  
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 1;
  font-family: Barlow, sans-serif;

  @media screen and (max-width: 991px): {
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
  };
};

navItem: {
  margin: 0px;
  padding: 0px;
};

navItemOptional: {
  @media screen and (max-width: 479px): {
    display: none!important;
  };
};

navItemSm: {
  @media screen and (min-width: 767px): {
    display: none!important;
  };
  @media screen and (max-width: 766px): {
    display: inline-block!important;
  };
};

navItemMd: {
  @media screen and (min-width: 767px): {
    display: inline-block!important;
  };
  @media screen and (max-width: 766px): {
    display: none!important;
  };
};

linkButton: {
  margin: theme.spacing(1; 1.5);
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898EC;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
};

navbar2: {
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
  
  @media screen and (max-width: 991px): {
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
  };

  @media screen and (max-width: 767px): {
    min-height: auto;
    padding: 2px 3%;
  };
};

wNav: {
  position: relative;
  //background: #dddddd;
  z-index: 1000;

  &:before {
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
  };

  &:after {
    clear: both;
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
  };

  &[data-collapse="all"]: {
    "&$wNavMenu": {
        display: none;
    };

    &$wNavButton: {
        display: block;
    };
  };
};

wNavBrand: {
  position: relative;
  float: left;
  text-decoration: none;
  color: #333333;
};

navContainer: {
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

  @media screen and (max-width: 991px): {
    width: 100%;
    max-height: 65px;
    max-width: 100%;
    min-height: 65px;
    padding-right: 0%;
    padding-left: 0%;
  };

  @media screen and (max-width: 767px): {
    min-height: auto;
  };
};

wNavMenu: {
  position: relative;
  float: right;
};
  
wNavButton: {
  position: relative;
  float: right;
  padding: 18px;
  font-size: 24px;
  display: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0; 0; 0; 0);
  tap-highlight-color: rgba(0; 0; 0; 0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  &:focus: {
    outline: 0;
  };
  
  &:open: {
    background-color: #C8C8C8;
    color: white;
  };
};
  
brand2: {
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

  @media screen and (max-width: 991px): {
    vertical-align: middle;
    width: 152px;
  };

  @media screen and (max-width: 767px): {
    height: auto;
  };
};

logo: {
  max-width: 80%;
  margin-top: 5px;

  @media screen and (max-width: 767px): {
    max-width: 80%;
  };
};
  
section11: {
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
  
  &.yellowBg: {
    background-color: #ffd343;
  };
  
  &.contactV2Section: {
    background-color: #ffd343;
  };

  @media screen and (max-width: 991px): {
    padding: 50px 5% 65px;
  };
};

wButton: {
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898EC;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
};

buttonsUl: {
  display: inline-block;
  margin: 4px;
  padding: 0px;
};

outlinedButton: {
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
    box-shadow: 1px 1px 12px 0 rgba(0; 0; 0; 0.08);
    -webkit-transform: translate(2px; 0px);
    -ms-transform: translate(2px; 0px);
    transform: translate(2px; 0px);
    color: #000;
    text-decoration: none;
  };
  
  &.displayBlock: {
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
    };
  };
};
    
introButton: {
  margin-left: 15px;
  border-color: #15113b;
  color: #0c0a89;
  
  &:hover {
    background-color: #15113b;
    -webkit-transform: translate(0px; -3px);
    -ms-transform: translate(0px; -3px);
    transform: translate(0px; -3px);
    color: #fff;
  };
};

darkOutline: {
  margin-top: 0px;
  border-color: #0c0a89;
  color: #0c0a89;
  font-weight: bold;

  &:hover {
    border-color: transparent;
    background-color: #15113b;
    box-shadow: none;
    -webkit-transform: translate(5px; 0px);
    -ms-transform: translate(5px; 0px);
    transform: translate(5px; 0px);
    color: #fff;
  };
};

dropdown-link: {
  display: none;
  color: #0c0a89;

  @media screen and (max-width: 767px): {
    display: block;
  };
};

dropdownMenu: {
  display: flex;
  flex-direction: row;
  list-styleType: none;
  margin: 0;
  padding: 0;

  & < li: {
    margin: 0 1rem;
    overflow: hidden;
  };
  
  @media (max-width: 767px): {
    position: absolute;
    top: 0;
    margin-top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    
    & > li: {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      background-color: #222;
    };

    & > li:not(:last-child): {
      border-bottom: 1px solid #444;
    };
  };
};

dropdownMenuLi: {
  margin: 0 1rem;
  overflow: hidden;

  @media (max-width: 767px): {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: white;
    background-color: #222;

    &:not(:last-child): {
      border-bottom: 1px solid #444;
    };
  };
};

dropdownMenuContainer: {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px): {
    display: flex;
  };
};

menuToggle: {
  display: none;

  &:checked: {
    margin-top: 0px;
    transform: rotate(405deg);
  };

  &:checked + $dropdownMenuContainer: {
    background-color: "#ccc"
  };

  &:checked + $dropdownMenuContainer &$dropdownMenuButton: {
    background: rgba(255; 255; 255; 0);
  };

  &:checked + $dropdownMenuContainer &$dropdownMenuButton::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  };

  @media (max-width: 767px): {
    & ~ $dropdownMenuLi: {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23; 1; 0.32; 1);
    };

    &:checked ~ $dropdownMenuLi: {
      border: 1px solid #333;
      height: 2.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23; 1; 0.32; 1);
    };
  };
};

dropdownMenuButton: {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23; 1; 0.32; 1);
  border-radius: 2px;

  &::before {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23; 1; 0.32; 1);
    border-radius: 2px;

    content: "";
    margin-top: -8px;
  };
  &::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23; 1; 0.32; 1);
    border-radius: 2px;

    content: "";
    margin-top: 8px;
  };

  &::before &$menuToggle:checked: {
    margin-top: 0px;
    transform: rotate(405deg);
  };

  &$menuToggle:checked + $dropdownMenuContainer: {

  };
};

nav-select: {
  background: #000 !important;
};

}));

