import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import FooterLink from './FooterLink';
import Copyright from './Copyright';
import FooterButtons from './FooterButtons';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  /* .section-10 */
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: auto;
  max-width: none;
  padding: 50px 6%;
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

  /* .section-10.footer-section */
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #15113b;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;

  @media screen and (max-width: 991px) {
    padding: 50px 5% 65px;
  };

  @media screen and (max-width: 767px) {
    padding: 40px 4%;
  };

  @media screen and (max-width: 479px) {
    padding-top: 10px;
    padding-bottom: 10px;
  };
`

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  font-family: 'Playfair Display', sans-serif;
  display: block;
  color: #fff;
  padding: 10px;
`

const FooterWrap = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    width: 100%;
  };

  @media screen and (max-width: 767px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  };

  @media screen and (max-width: 479px) {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  };
`

const StyledH2 = styled.h2`
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;

    /* .white-text */
    font-family: 'Playfair Display', sans-serif;
    color: #fff;
    font-size: 20px;
`

const FooterButtonsContainer = styled.div`
  width: 380px;
  margin-left: 150px;
`

const FooterGrid = styled.div`
  /* .w-layout-grid */
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;

  /* _4-col-grid */
  padding-top: 20px;
  padding-bottom: 20px;
  grid-column-gap: 35px;
  grid-row-gap: 0px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;

  @media screen and (max-width: 767px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 0px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  };
`

const FoooterColumn = styled.div`
    border-top: 1px solid hsla(0, 0%, 96.9%, 0.2);
    font-size: 16px;

  @media screen and (max-width: 767px) {
    width: 48%;
    margin-bottom: 50px;
  }
`

const FooterTitle = styled.div`
  /* .footer-title */
  padding-top: 8px;
  padding-bottom: 8px;
  color: #15113b;
  font-weight: 600;
  
  /* .white-text */
  font-family: 'Playfair Display', sans-serif;
  color: #fff;
  font-size: 20px;

  /* .footer-title.white-text */
  padding-top: 8px;
  padding-bottom: 8px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    text-align: left;
  };
`

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: 'rgba(21, 17, 59, 1)',   // company darkest blue
        marginTop: '0px',
        marginRight: 'auto',
        marginLeft: 'auto',
        fontFamily: ['Playfair Display', 'sans-serif'],
    },

    footerWrap: {
        display: '-webkit-box',
        display: '-webkit-flex',
        display: '-ms-flexbox',
        display: 'flex',
        width: '100%',
        webkitBoxPack: 'justify',
        webkitJustifyContent: 'space-between',
        msFlexPack: 'justify',
        justifyContent: 'space-between',
        
        '@media screen and (max-width: 991px)': {
            width: '100%',
        },
        
        '@media screen and (max-width: 767px)': {
            webkitBoxOrient: 'vertical',
            webkitBoxDirection: 'normal',
            webkitFlexDirection: 'column',
            msFlexDirection: 'column',
            flexDirection: 'column',
            webkitBoxPack: 'center',
            webkitJustifyContent: 'center',
            msFlexPack: 'center',
            justifyContent: 'center',
            webkitBoxAlign: 'start',
            webkitAlignItems: 'flex-start',
            msFlexAlign: 'start',
            alignItems: 'flex-start',
        },

        '@media screen and (max-width: 469px)': {
            webkitBoxAlign: 'start',
            webkitAlignItems: 'flex-start',
            msFlexAlign: 'start',
            alignItems: 'flex-start',
        },
    },

    textWhite: {
        color: '#fff',
        fontFamily: '"Playfair Display"',
        align: 'left',
    },

    footerBottom: {
        display: 'flex',
        height: '30px',
    },

    footerGrid: {
        // 4-col-grid
        display: 'grid',
        paddingTop: '20px',
        paddingBottom: '20px',
        gridColumnGap: '35px',
        gridRowGap: '0px',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: 'auto',
    },

    footerColumn: {
        borderTop: '1px solid hsla(0, 0%, 96.9%, 0.2)',
        fontSize: '16px'
    },

    footerTitle: {
        paddingTop: '8px',
        paddingBottom: '8px',
        fontFamily: '"Playfair Display"',
        fontSize: '20px',
        fontWeight: '700',
    },

    button8displayBlock: {
        display: 'flex'
    },
        
    max300Px: {
        fontFamily: 'inherit',
        maxWidth: '300px',
    },
        
    socialLinksWrapper: {
        display: '-webkit-box',
        display: '-webkit-flex',
        display: '-ms-flexbox',
        display: 'flex',
        marginTop: '10px',
        marginLeft: '0px',
        marginBottom: '10px',
        webkitBoxPack: 'center',
        webkitJustifyContent: 'center',
        msFlexPack: 'center',
        justifyContent: 'center',
        webkitBoxAlign: 'center',
        webkitAlignItems: 'center',
        msFlexAlign: 'center',
        alignItems: 'center',
    },

    justifyStart: {
        webkitBoxPack: 'start',
        webkitJustifyContent: 'flex-start',
        msFlexPack: 'start',
        justifyContent: 'flex-start',
    },
        
    wInlineBlock: {
        maxWidth: '100%',
        display: 'inline-block',
    },


}));


export default function Footer() {
    const classes = useStyles();

    return (
        <FooterStyled>
            <FooterContainer>
                    <FooterWrap>
                        <div className={classes.max300Px}>
                            <StyledH2>Connect</StyledH2>
                            <div className={`${classes.socialLinksWrapper} ${classes.justifyStart}`}>
                                <a href="https://www.linkedin.com/company/mavata" target="_blank" className={`${classes.socialLinksWrapper} ${classes.wInlineBlock}`}>
                                <img src="https://uploads-ssl.webflow.com/615b5c7a50624691794203d6/627a8f7bffcba4fbc69b5fa0_5e1ed0b824ceb838fadfa9b7_linkedin-icon-png-transparent-background-5.png" width="18" sizes="(max-width: 767px) 18px, (max-width: 991px) 2vw, 18px" srcSet="https://uploads-ssl.webflow.com/615b5c7a50624691794203d6/627a8f7bffcba4fbc69b5fa0_5e1ed0b824ceb838fadfa9b7_linkedin-icon-png-transparent-background-5-p-500.png 500w, https://uploads-ssl.webflow.com/615b5c7a50624691794203d6/627a8f7bffcba4fbc69b5fa0_5e1ed0b824ceb838fadfa9b7_linkedin-icon-png-transparent-background-5.png 609w" alt="Link Up with Mavata" />
                                </a>
                            </div>
                        </div>
                        <FooterButtons />
                    </FooterWrap>
                    
                    <FooterGrid>
                        <FoooterColumn><FooterTitle>Home</FooterTitle>
                            <FooterLink to="/">Home</FooterLink>
                        </FoooterColumn>
                        <FoooterColumn><FooterTitle>Company</FooterTitle>
                            <FooterLink to="/">Careers</FooterLink>
                        </FoooterColumn>
                        <FoooterColumn><FooterTitle>Other</FooterTitle>
                            <FooterLink to="/pp">Privacy Policy</FooterLink>
                            <FooterLink to="/toa">Terms</FooterLink>
                        </FoooterColumn>
                        <FoooterColumn></FoooterColumn>
                    </FooterGrid>
                    <div className={classes.footerBottom}></div>
                    <Copyright />
            </FooterContainer>
        </FooterStyled>

    )
}