// Company
const useStyles = makeStyles((theme) => ({
bodyMain2 {
  //margin-left: 250px;  // width of sidebar
  padding: 10px 15px;
  margin: 0;

  background: #E5E5E5;

  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  vertical-align: top;

  position: relative;
  //transition: margin-left .4s;
}

sectionContent2 {
  display: block;
  top: 0;
  left: 0;
  color: #000;
  font-family: Barlow;
}


wrapper2 {
  background-color: #fff;
  position: relative;

  display: table;
  width: 100%;
  height: 100%;
}
}));

// Sidebar
const useStyles = makeStyles((theme) => ({
sidebar2 {
  display: flex;
  flex-direction: column;
  // display: table-cell;
  // width: 15%;
  // vertical-align: top;

  position: fixed!important;
  left: 0;
  bottom: 0;
  top: 75px;
  min-height: calc(100vh - 75px);

  width: 250px;
  height: 100%;

  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid #EEF1F6;

  z-index: 1;
  overflow: auto;

  & div {
    padding: 8px;
    font-size: 24px;
    display: block;
  }
  
  [theme.breakpoints.down('850px')] {
    display: none!important;
  }
}

sidebar-collapsed {
  display: flex;
  flex-direction: column;
  
  width: 52px;
  
  position: fixed;
  left: 0;
  bottom: 0;
  top: 75px;    // height of the navbar

  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid #EEF1F6;

  [theme.breakpoints.up('993')] {
    display: block!important;
  }

  & div {
    padding: 8px;
    font-size: 24px;
    display: block;
  }

  & + $sidebarIcon {
    margin-right: 0;
  }

  & + $sidebar-text {
    display: none;
  }
  
  & + $sidebarLogo {
    display: none;
  }
}

sidebarIcon {
  width: 1.25em;
  height: 1.25em;
  margin-right: 5px;
  cursor: pointer;
  user-select: none;
  padding-right: 10px;
  background-color: #fff;
}

sidebarLogo {
  font-size: 16px;
  display: inline-block;
  align-text: left;
}

sidebar-text {
  font-size: 16px;
  padding-left: 5px;
}

hide {
  display: none;
  visibility: none;
}
}));

