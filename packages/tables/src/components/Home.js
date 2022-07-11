import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <React.Fragment>
      <h1><Link to='/tables'>Hello</Link></h1>
    </React.Fragment>
  )
}