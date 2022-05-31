import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import FooterLink from './FooterLink';
import Copyright from './Copyright';
import FooterButtons from './FooterButtons';


const useStyles = makeStyles((theme) => ({
    '@global': {
        a: {
            fontFamily: '"Playfair Display"',
            textDecoration: 'none',
        },
            
        h2: {
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '24px',
            lineHeight: '36px',
            marginTop: '20px',
        },
        
        h6: {
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '12px',
            lineHeight: '18px',
            marginTop: '10px',
        },

        footer: {
            display: '-webkit-box',
            display: '-webkit-flex',
            display: '-ms-flexbox',
            display: 'flex',
            position: 'relative',
            width: '100%',
            maxWidth: 'none',
            padding: '30px 6%',
            paddingTop: '10px',
            paddingBottom: '10px',
            marginRight: '50px',
            backgroundColor: '#15113b',
            alignItems: 'center',
            webkitBoxOrient: 'horizontal',
            webkitBoxDirection: 'normal',
            webkitFlexDirection: 'row',
            msFlexDirection: 'row',
            flexDirection: 'row',
            webkitBoxPack: 'center',
            webkitJustifyContent: 'center',
            msFlexPack: 'center',
            justifyContent: 'center',
            webkitBoxAlign: 'center',
            webkitAlignItems: 'center',
            msFlexAlign: 'center',
            webkitTransition: 'all 300ms ease',
            transition: 'all 300ms ease',
        },
    },

    sectionFooter: {
        display: 'block',
        color: '#fff',
        width: '85%',
        padding: theme.spacing(4),
    },
    footerContainer: {
        backgroundColor: 'rgba(21, 17, 59, 1)',   // company darkest blue
        width: '100%',
        marginTop: '20px',
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
        <footer>
            <section className={classes.footerContainer}>
                <div className={classes.sectionFooter}>
                    <div className={classes.footerWrap}>
                        <div className={classes.max300Px}>
                            <h2 className={classes.textWhite}>
                                Connect
                            </h2>
                            <div className={`${classes.socialLinksWrapper} ${classes.justifyStart}`}>
                                <a href="https://www.linkedin.com/company/mavata" target="_blank" className={`${classes.socialLinksWrapper} ${classes.wInlineBlock}`}>
                                <img src="https://uploads-ssl.webflow.com/615b5c7a50624691794203d6/627a8f7bffcba4fbc69b5fa0_5e1ed0b824ceb838fadfa9b7_linkedin-icon-png-transparent-background-5.png" width="18" sizes="(max-width: 767px) 18px, (max-width: 991px) 2vw, 18px" srcSet="https://uploads-ssl.webflow.com/615b5c7a50624691794203d6/627a8f7bffcba4fbc69b5fa0_5e1ed0b824ceb838fadfa9b7_linkedin-icon-png-transparent-background-5-p-500.png 500w, https://uploads-ssl.webflow.com/615b5c7a50624691794203d6/627a8f7bffcba4fbc69b5fa0_5e1ed0b824ceb838fadfa9b7_linkedin-icon-png-transparent-background-5.png 609w" alt="Link Up with Mavata" />
                                </a>
                            </div>
                        </div>
                        <FooterButtons />
                    </div>
                    <div className={classes.footerGrid}>
                        <div className={classes.footerColumn}><div className={classes.footerTitle}>Home</div>
                            <FooterLink to="/">Home</FooterLink>
                        </div>
                        <div className={classes.footerColumn}><div className={classes.footerTitle}>Company</div>
                            <FooterLink to="/">Careers</FooterLink>
                        </div>
                        <div className={classes.footerColumn}><div className={classes.footerTitle}>Other</div>
                            <FooterLink to="/pp">Privacy Policy</FooterLink>
                            <FooterLink to="/toa">Terms</FooterLink>
                        </div>
                        <div className={classes.footerColumn}></div>
                    </div>
                    <div className={classes.footerBottom}></div>
                    <Copyright />
                </div>
            </section>
        </footer>

    )
}