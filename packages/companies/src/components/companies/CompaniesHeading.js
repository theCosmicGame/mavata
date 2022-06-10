import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ButtonWorkflow from '../buttons/ButtonWorkflow'

const useStyles = makeStyles((theme) => ({

  frame: {
    padding: '0px',
    gap: '8px',
    
    marginTop: '50px',

    display: 'Webkit-box',
    display: 'WebkitFlex',
    display: '-msFlexbox',
    display: 'flex',
    width: '100%',
    maxWidth: 'none',
    minHeight: 'auto',
    marginRight: '0px',
    marginLeft: '0px',
    paddingTop: '0px',
    paddingRight: '0%',
    paddingLeft: '0%',
    webkitBoxPack: 'justify',
    webkitJustifyContent: 'space-between',
    msFlexPack: 'justify',
    justifyContent: 'space-between',
    webkitBoxAlign: 'flexStart',
    webkitAlignItems: 'ceflexStartnter',
    msFlexAlign: 'flexStart',
    alignItems: 'flexStart',
    
    flexDirection: 'row',
  },

  /* All Companies */
  headingA: {
    padding: 0,
    margin: 0,

    height: '40px',
    fontFamily: 'Overpass',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '36px',
    lineHeight: '40px',
    /* identical to box height, or 111% */
    letterSpacing: '-0.03em',
    /* Blacks/001 */
    color: '#091540',
    /* Inside auto layout */
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },

  /* You have 15 companies in your portfolio. */
  subHeadingA: {
    padding: 0,
    margin: 0,

    fontFamily: 'Overpass',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '28px',
    /* identical to box height, or 175% */
    letterSpacing: '-0.02em',
    /* Grays/001 */
    color: '#3E3D5C',
    /* Inside auto layout */
    flex: 'none',
    order: 1,
    flexGrow: 0,
  },
  
  /* Button */
  addCompanyButton: {
    flex: 1,

    boxSizing: 'border-box',
    /* Auto layout */
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 20px',
    gap: '8px',
    position: 'absolute',
    width: '201px',
    height: '44px',
    right: '120px',
    top: '197px',
    /* Primary */
    background: '#08048C',
    /* Primary */
    border: '1.8px solid #08048C',
    borderRadius: '10px',
  },

  /* plus */
  buttonPlusSign: {
    display: 'none',
    width: '16px',
    height: '16px',
    /* Inside auto layout */
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },

  /* Vector */
  buttonVector: {
    position: 'absolute',
    left: '12.5%',
    right: '12.5%',
    top: '12.5%',
    bottom: '12.5%',
    /* Whites / White */
    border: '1.8px solid #FFFFFF',
  },


  /* Add a new company */
  buttonText: {
    width: '133px',
    height: '20px',
  
    fontFamily: 'Overpass',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '20px',
    /* identical to box height, or 133% */
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    /* Inside auto layout */
    flex: 'none',
    order: 2,
    flexGrow: 0,
  },

  buttonDiv: {
    display: 'inline-block',
    width: '250px!important',
  },
}))

const table = [['FastServe HVAC', 'Business Services', 'Admin'],
              ['Hong Business Solutions', 'Business Services', 'Admin'],
              ['Kearn Manufacturing', 'Industrials', 'Admin'],
              ['RetChem', 'Industrials', 'Admin'],
              ['ChallengeT', 'Business Services', 'Admin'],
              ['Excalipre', 'Software', 'Admin'],
              ['OilFast', 'Franchisor', 'Admin'],
              ['Rigid Bikes', 'Consumer', 'Admin'],
              ['UCare', 'Healthcare', 'Admin'],
              ['LifeWorx', 'Healthcare', 'Admin']
            ]

export default function CompaniesHeading() {
  const classes = useStyles()
  const n = table.length

  return (
    <React.Fragment>
    <div className={classes.frame}>
      <div>
        <h1 className={classes.headingA}>All Companies</h1>
        <p className={classes.subHeadingA}>You have {n} companies in your dashboard.</p>
      </div>
      <div className={classes.buttonDiv}><ButtonWorkflow to='/addcompany'>Add a new company</ButtonWorkflow></div>
    </div>
    </React.Fragment>
  )
}