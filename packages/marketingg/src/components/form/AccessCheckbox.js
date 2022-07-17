import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;

  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 0px;

  border-bottom: 3px solid #15113b;
  font-family: Barlow, sans-serif;
  color: #0c0a89;
  text-align: left;

  :before {
    content: ' ';
    display: table;
    -ms-grid-column-span: 1;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    -ms-grid-column: 1;
  }

  :after {
    content: ' ';
    display: table;
    -ms-grid-column-span: 1;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    -ms-grid-column: 1;
    -ms-grid-row-span: 1;
    -ms-grid-row: 1;
    clear: both;
  }

  @media screen and (max-width: 991px) {
    width: 45%;
    margin-right: 5%;
  }

  @media screen and (max-width: 479px) {
    width: 100%;
    margin-top: 6px;
    border-bottom-color: #15113b;
    color: #15113b;
  }
`

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 9%;
  margin-left: 0px;

  box-sizing: border-box;
  padding: 0;

  float: left;
  margin-bottom: 0px;
  margin-right: 0px;
  margin-top: 4px;
  line-height: normal;

  vertical-align: middle;
  position: relative;
  marginleft: 30px;
  paddingleft: 30px;
`

const StyledSpan = styled.span`
  font-family: 'Playfair Display', sans-serif;
  margin-bottom: 0px;
  padding-left: 5px;
  color: #15113b;
  font-size: 16px;
  line-height: 1em;
  font-weight: 400;

  display: inline-block;
  cursor: pointer;

  @media screen and (max-width: 479px) {
    padding-left: 0px;
  }
`

const useStyles = makeStyles((theme) => ({
   
  wCheckbox: {
    display: 'block',
    marginBottom: '5px',
    paddingLeft: '20px',
    horizontalAlign: 'bottom',

    '&:before': {
      content: '" "',
      display: 'table',
      msGridColumnSpan: 1,
      gridColumnEnd: 2,
      msGridColumn: 1,
      gridColumnStart: 1,
      msGridRowSpan: 1,
      gridRowEnd: 2,
      msGridRow: 1,
      gridRowStart: 1,
    },

    '&:after': {
      content: '" "',
      display: 'table',
      msGridColumnSpan: 1,
      gridColumnEnd: 2,
      msGridColumn: 1,
      gridColumnStart: 1,
      msGridRowSpan: 1,
      gridRowEnd: 2,
      msGridRow: 1,
      gridRowStart: 1,
      clear: 'both',
    },
  },

  fieldCheckbox2: {
    display: 'inline-block',
    // marginBottom: '2rem',
    paddingBottom: '0.5rem',
    //paddingLeft: '20px',
    borderBottom: '3px solid #15113b',
    color: '#15113b',
    textAlign: 'left',

    '@media screen and (max-width: 991px)': {
      width: '45%',
      marginRight: '5%',
    },
  },

    wClearfix: {
    '&:before': {
    content: '" "',
    display: 'table',
    gridColumnStart: 1,
    gridRowStart: 1,
    gridColumnEnd: 2,
    gridRowEnd: 2,
    },

    '&:after': {
    content: '" "',
    display: 'table',
    gridColumnStart: 1,
    gridRowStart: 1,
    gridColumnEnd: 2,
    gridRowEnd: 2,
    clear: 'both',
    },
  },

  checkboxLabel: {
    verticalAlign: 'middle',
    position: 'relative',
    marginLeft: '30px',
    paddingLeft: '30px',
  },
  
  fieldCheckbox: {
    // marginBottom: '2rem',
    paddingBottom: '0.5rem',
    paddingLeft: '0px',
    borderBottom: '3px solid #15113b',
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#0c0a89',
    textAlign: 'left',

    '@media screen and (max-width: 991px)': {
      width: '45%',
      marginRight: '5%',
    },

    '@media screen and (max-width: 479px)': {
      width: '100%',
      marginTop: '6px',
      borderBottomColor: '#15113b',
      color: '#15113b',
    },
  },

  checkbox: {
    width: '5%',
    marginLeft: '0px',
    paddingTop: '37px',
  },

  wCheckboxInput: {
    float: 'left',
    marginBottom: '0px',
    marginLeft: '-20px',
    marginRight: '0px',
    marginTop: '4px',
    lineHeight: 'normal',
    
    "&.inputTypeCustom": {
      borderTopWidth: '1px',
      borderBottomWidth: '1px',
      borderLeftWidth: '1px',
      borderRightWidth: '1px',
      borderTopColor: '#ccc',
      borderBottomColor: '#ccc',
      borderLeftColor: '#ccc',
      borderRightColor: '#ccc',
      borderTopStyle: 'solid',
      borderBottomStyle: 'solid',
      borderLeftStyle: 'solid',
      borderRightStyle: 'solid',
      width: '12px',
      height: '12px',
      borderBottomLeftRadius: '2px',
      borderBottomRightRadius: '2px',
      borderTopLeftRadius: '2px',
      borderTopRightRadius: '2px',
    },
  },

  redirected: {
    '&:checked': {
      backgroundColor: '#3898ec',
      borderTopColor: '#3898ec',
      borderBottomColor: '#3898ec',
      borderLeftColor: '#3898ec',
      borderRightColor: '#3898ec',
      backgroundImage: `url('https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg')`,
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      
      '&:focus': {
        boxShadow: '0px 0px 3px 1px #3898ec',
      },
    },
  },
    
  fieldLabel4: {
    marginBottom: '0px',
    color: '#15113b',
    fontSize: '16px',
    lineHeight: '1em',
    fontWeight: 400,
    
    '&.fieldLabelCheckbox': {
      width: '90%',
    },
  },
    
  wFormLabel: {
    display: 'inline-block',
    cursor: 'pointer',
    fontWeight: 'normal',
    marginBottom: '0px',
    paddingTop: '10px',
    fontFamily: 'Playfair Display',
    fontSize: '16px',
  },
}));

export default function FieldCheckbox(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <StyledLabel>
        <StyledCheckbox id={props.name} name={props.name} data-name={props.name} />
        <StyledSpan htmlFor={props.name}>{props.children}</StyledSpan>
      </StyledLabel>
  </React.Fragment>
  )
}