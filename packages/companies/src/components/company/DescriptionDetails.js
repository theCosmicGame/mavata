import React from 'react';
import styled from 'styled-components';

import IconBriefcase from '../../assets/img/icons/icon-briefcase.png';
import IconGlobe from '../../assets/img/icons/icon-globe.png';
import IconLocation from '../../assets/img/icons/icon-location.png';
import ExternalLink from '../../assets/img/icons/external-link.png';

const Details = styled.div`
  min-width: 25%;   /* tied to width of 'Description' styled div */
  width: auto;

  display: flex;
  flex-direction: column;
  align-items: left;
  vertical-align: middle;
  justify-content: space-evenly;

  white-space: nowrap;

  @media screen and (max-width: 850px) {
    display: none;
  };
`

const Detail = styled.div`
  padding: 5px;
  display: inline-block;

  vertical-align: inherit;
`

const DetailText = styled.div`
  display: inline-block;
  margin: 0 10px;
  vertical-align: inherit;

  font-family: 'Overpass';
  font-style: normal;

  flex: none;
  order: 0;
  flex-grow: 0;
`

const DetailHeading = styled.h5`
  margin: 0;
  padding: 0;

  font-weight: 700;
  font-size: 16px;
  /* identical to box height, or 125% */
  letter-spacing: -0.02em;
  /* Blacks/002 */
  color: #2F2F4C;
`

const DetailDescriptor = styled.h6`
  margin: 0;
  padding: 0;

  font-weight: 400;
  font-size: 14px;
  /* identical to box height, or 114% */
  letter-spacing: -0.02em;
  /* Grays/003 */
  color: #6A698C;
`

const ExtLinkIcon = styled.img`
  margin-left: 5px;
  vertical-align: middle;
`

export default function DescriptionDetails() {

  return(
    <React.Fragment>
      <Details>
        <Detail>
          <img src={IconBriefcase} alt='sector' />
          <DetailText>
            <DetailHeading>Business Serivces </DetailHeading>
            <DetailDescriptor>Sector</DetailDescriptor>
          </DetailText>
        </Detail>
        <Detail>
          <img src={IconLocation} alt='headquarters' />
          <DetailText>
            <DetailHeading>Chicago, IL </DetailHeading>
            <DetailDescriptor>Headquarters</DetailDescriptor>
          </DetailText>
        </Detail>
        <Detail>
          <img src={IconGlobe} alt='webpage' />
          {/* BEM TO DO: refactor icon to link */}
          <DetailText>
            <DetailHeading>www.fastservhvac.com<ExtLinkIcon src={ExternalLink} /></DetailHeading>
            <DetailDescriptor>Website</DetailDescriptor>
          </DetailText>
        </Detail>
      </Details>
    </React.Fragment>
  )
}