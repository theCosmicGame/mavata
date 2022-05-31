import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FieldCheckbox from './FieldCheckbox';

const useStyles = makeStyles((theme) => ({
  '@global': {
    h4: {
      fontWeight: 'bold',
      marginBottom: '10px',
      fontSize: '18px',
      lineHeight: '24px',
      marginTop: '10px',
      fontFamily: 'Playfair Display',
    },
  },
  
  h42: {
    position: 'relative',
    padding: '0px',
    color: '#15113b',
    fontWeight: 700,
  },
  
  wLayoutGrid3: {
    display: '-ms-grid',
    display: 'grid',
    gridAutoColumns: '1fr',
    msGridColumns: '1fr 1fr',
    gridTemplateColumns: '1fr 1fr',
    msGridRows: 'auto auto',
    gridTemplateRows: 'auto auto',
    gridRowGap: '16px',
    gridColumnGap: '16px',
  },
  
  formCheckboxGrid: {
    msGridColumns: '1fr 1fr 1fr 1fr',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    msGridRows: 'auto',
    gridTemplateRows: 'auto',
  },
  
  wCheckbox: {
    display: 'block',
    width: '275px',
    marginBottom: '5px',
    paddingLeft: '20px',
  
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
      marginBottom: '2rem',
      paddingBottom: '0.5rem',
      paddingLeft: '0px',
      borderBottom: '3px solid #15113b',
      color: '#15113b',
      textAlign: 'left',
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
      marginBottom: '2rem',
      paddingBottom: '0.5rem',
      paddingLeft: '0px',
      borderBottom: '3px solid #15113b',
      fontFamily: ['Barlow', 'sans-serif'],
      color: '#0c0a89',
      textAlign: 'left',
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

export default function LearnMoreSection(props) {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <h4 className={classes.h42}>I'm interested in: </h4>
      <div className={`${classes.wLayoutGrid3} ${classes.formCheckboxGrid}`}>
        <FieldCheckbox name="Support">Learn More</FieldCheckbox>
        <FieldCheckbox name="Pricing-and-Plans">Getting Early Access</FieldCheckbox>
      </div>
    </React.Fragment>
  )
};
