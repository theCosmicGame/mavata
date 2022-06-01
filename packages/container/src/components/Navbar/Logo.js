import logo from '../../../public/images/MAVATA_LOGO-Transparent.png';
import logo1 from '../../../public/images/MAVATA_LOGO-Transparent-p-500.png';
import logo2 from '../../../public/images/MAVATA_LOGO-Transparent-p-800.png';
import logo3 from '../../../public/images/MAVATA_LOGO-Transparent-p-1080.png';
import logo4 from '../../../public/images/MAVATA_LOGO-Transparent-p-1600.png';

// do you need to add back srcSet={}
import useStyles from '../styling/NavStyle';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Logo() {
  const classes = useStyles();

  return (
    <div>
    <Link to='/' className={`${classes.brand2} ${classes.wNavBrand}}`} aria-current="page">
      <img width="152" alt="logo" src={logo} className={classes.logo} />
    </Link>
  </div>
  );
};