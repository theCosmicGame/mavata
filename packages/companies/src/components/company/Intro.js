import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';
import EditProfile from '../buttons/EditProfile';

import img from '../../assets/img/banners/Rectangle.png';
import img1 from '../../assets/img/banners/Rectangle-1.png';

const Rectangle = styled.div`
  position: relative;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #EEF1F6;
  border-radius: 12px 12px 0px 0px;
  height: 136px;
  align: center

  box-sizing: border-box;
`

const Banner = styled.div`
  margin-top: 10px;
  position: relative;
`

const CompanyImage = styled.img`
  position: relative;
  left: 30px;
  top: -30px;
  margin-bottom: -10px;

  @media (max-width: 767px) {
    width: auto;
  };
`

const Description = styled.div`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100px;
  width: 750px;


  p {
    width: auto;
  };

  @media (max-width: 767px) {
    width: auto!important;
  };
`

const Details = styled.div`

`

const TitleText = styled.h1`
  font-family: Overpass;
  font-ftyle: normal;
  font-weight: 400;
  font-size: 1.25vw;        /* 16px */
  line-height: 28px;
  /* identical to box height, or 175% */
  letter-spacing: -0.02em;
  /* Grays/001 */
  color: #3E3D5C;
`

const TitleLine = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;

  display: flex;
  justify-content: space-between;
`

export default function Intro() {

  return (
    <Wrapper>
      <Banner>
        <Rectangle />
        <CompanyImage src={img1} alt='logo' />
      </Banner>

      <TitleLine>
        <h1>FastServ HVAC</h1>
        <EditProfile />
      </TitleLine>

      <div>
        <Description>
          <p>FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.</p>
          <p>The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.</p>
          <p>Rock Equity invested in 2019.</p>
        </Description>

        <Details>

        </Details>
      </div>
    </Wrapper>
  )
}