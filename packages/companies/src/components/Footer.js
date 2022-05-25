import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import MaterialLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import styled from "styled-components";


function Copyright() {
    return (
        <Typography variant="body2" align="center">
            {'Copyright © '}
            <MaterialLink component={Link} to="/" color="inherit">
                Mavata
            </MaterialLink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const useStyles = makeStyles((theme) => ({
    '@global': {
        '@font-face': {
            fontFamily: 'Barlow',
            src: 'https://fonts.googleapis.com/css2?family=Barlow&display=swap',
            fontWeight: '400'
        },
        '@font-face': {
            fontFamily: '"Playfair Display"',
            src: 'https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap',
            fontWeight: '400'
          },
        a: {
            fontFamily: '"Playfair Display"',
            textDecoration: 'none',
        },
    },
    sectionFooter: {
        display: 'block',
        backgroundColor: 'rgba(21, 17, 59, 1)',   // company darkest blue
        color: '#fff',
        padding: theme.spacing(6),
    },
    footerContainer: {

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
    },
    footerBottom: {
        display: 'flex',
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
    footerLink: {
        display: 'block',
        color: '#fff',
        paddingTop: '8px',
        paddingBottom: '8px',
        fontFamily: 'Barlow',
        fontSize: '12px',
        fontWeight: '400',
    },
    footerButtonsContain: {
        width: '380px',
        marginLeft: '150px',
    },
    button8displayBlock: {
        display: 'flex'
    },
}));

const StyledContainer = styled.section`
    width: 100%;
    max-width: 1400px;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Playfair Display', sans-serif;
`

export default function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
        <StyledContainer name="footercontainer1">
            <footer className={classes.sectionFooter}>
                <Typography variant="h6" align="center" gutterBottom>
                    Connect
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <div className={classes.footerGrid}>
                    <div className={classes.footerColumn}><div className={classes.footerTitle}>Home</div>
                    </div>
                    <div className={classes.footerColumn}><div className={classes.footerTitle}>Company</div>
                    <ul><a href="#" className={classes.footerLink}>Careers</a></ul>
                    <ul><MaterialLink component={Link} to="/" color="inherit">More</MaterialLink></ul>
                    </div>
                    <div className={classes.footerColumn}><div className={classes.footerTitle}>Other</div>
                    </div>
                    <div className={classes.footerColumn}></div>
                </div>
                <div className={classes.footerBottom}></div>
                <Copyright />
            </footer>
        </StyledContainer>
        </React.Fragment>
    )
}