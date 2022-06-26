import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

import EditProfile from '../buttons/EditProfile';
import DescriptionDetails from './DescriptionDetails';

import img from '../../assets/img/banners/Rectangle.png';
import img1 from '../../assets/img/banners/Rectangle-1.png';


const BannerImg = styled.div`
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

const ContainerBox = styled.div`
  padding: 0px 10px;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: stretch;   /* gives items same height (flex-direction=row) or width for column flex direction */
`

const TitleText = styled.h1`
  font-family: Overpass;
  font-style: bold;
  font-weight: 400;
  font-size: 18px;

  padding: 10px 0;
  /* Grays/001 */
  color: #3E3D5C;

  @media (min-width: 768px) {
    font-size: 22px;
    font-style: normal;
  };
  @media (min-width: 1024px) {
      font-size: 24px;
  };
  @media (min-width: 1280px) {
      font-size: 28px;
  };
`

const TitleLine = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  vertical-align: middle;
  minHeight: 35px;
`

const Description = styled.div`
  position: relative;
  overflow: auto;

  min-height: 100px;
  max-height: 200px;
  width: 65%;       /* tied to width of 'Details' styled div */
  
  p {
    width: auto;
    overflow-wrap: break-word;
    font-size: 14px;
  };

  @media screen and (max-width: 767px) {
    width: auto!important;
  };
`


export default function Intro() {

  return (
    <Wrapper>
      <Banner>
        <BannerImg />
        <CompanyImage src={img1} alt='logo' />
      </Banner>

      <ContainerBox>
        <TitleLine>
          <TitleText>FastServ HVAC</TitleText>
          <EditProfile />
        </TitleLine>
      </ContainerBox>

      <ContainerBox>
        <Description>
          <div>
            <p>FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.</p>
            <p>The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.</p>
            <p>Rock Equity invested in 2019.</p>
            <p>Rock Equity invested in 2019.</p>
            <p>Rock Equity invested in 2019.</p>
            <p>Rock Equity invested in 2019.</p>
            <p>Rock Equity invested in 2019.</p>
            <p>Rock Equity invested in 2019.</p>
          </div>
        </Description>

        <DescriptionDetails />
      </ContainerBox>
    </Wrapper>
  )
}