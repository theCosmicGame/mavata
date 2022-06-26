import React from 'react';
import styled from 'styled-components';

import IconBriefcase from '../../assets/img/icons/icon-briefcase.png';
import IconGlobe from '../../assets/img/icons/icon-globe.png';
import IconLocation from '../../assets/img/icons/icon-location.png';
import ExternalLink from '../../assets/img/icons/external-link.png';

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
  margin: 2px 0 0 0;
  padding: 0;

  font-weight: 700;
  font-size: 16px;
  /* identical to box height, or 125% */
  letter-spacing: -0.02em;
  /* Blacks/002 */
  color: #2F2F4C;

  @media screen and (max-width: 850px) {
    font-size: 12px;
  };
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

  @media screen and (max-width: 850px) {
    font-size: 10px;
  };
`

const Icon = styled.img`
  @media screen and (max-width: 850px) {
    height: 30px;
    width: auto;
    vertical-align: top;
  };
`

const ExtLinkIcon = styled.img.attrs({ src: `${ExternalLink}` })`
  margin-left: 5px;
  vertical-align: middle;

  @media screen and (max-width: 850px) {
    height: 10px;
  };
`

export default function DescriptionDetails({ isExpanded, mainWidth }) {

  return(
    <React.Fragment>
      <Detail>
        <Icon src={IconBriefcase} alt='sector' />
        <DetailText>
          <DetailHeading>Business Serivces </DetailHeading>
          <DetailDescriptor>Sector</DetailDescriptor>
        </DetailText>
      </Detail>
      <Detail>
        <Icon src={IconLocation} alt='headquarters' />
        <DetailText>
          <DetailHeading>Chicago, IL </DetailHeading>
          <DetailDescriptor>Headquarters</DetailDescriptor>
        </DetailText>
      </Detail>
      <Detail>
        <Icon src={IconGlobe} alt='webpage' />
        {/* BEM TO DO: refactor icon to link */}
        <DetailText>
          <DetailHeading>www.fastservhvac.com<ExtLinkIcon /></DetailHeading>
          <DetailDescriptor>Website</DetailDescriptor>
        </DetailText>
      </Detail>
    </React.Fragment>
  )
}