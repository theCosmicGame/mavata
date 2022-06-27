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

  font-size: ${props => (props.mainWidth <= 850) ? '14px!important' : '16px!important'};
  font-weight: 700;
  /* identical to box height, or 125% */
  letter-spacing: -0.02em;
  /* Blacks/002 */
  color: #2F2F4C;
  @media screen and (max-width: 850px) {
    font-size: 12px;
  };
`

const DetailDescriptor = styled.h6.attrs()`
  margin: 0;
  padding: 0;

  font-size: ${props => (props.mainWidth <= 850) ? '12px!important' : '14px!important'};
  font-weight: 400;
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
    vertical-align: top!important;
  };

  @media screen and (max-width: 1100px) {
    height: ${props => ((props.mainWidth <= 850) || props.isExpanded) ? '40px' : 'auto'};
    vertical-align: top!important;
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
        <Icon src={IconBriefcase} alt='sector' isExpanded={isExpanded} mainWidth={mainWidth} />
        <DetailText>
          <DetailHeading mainWidth={mainWidth} >Business Serivces </DetailHeading>
          <DetailDescriptor mainWidth={mainWidth} >Sector</DetailDescriptor>
        </DetailText>
      </Detail>
      <Detail>
        <Icon src={IconLocation} alt='headquarters' isExpanded={isExpanded} mainWidth={mainWidth} />
        <DetailText>
          <DetailHeading mainWidth={mainWidth} >Chicago, IL </DetailHeading>
          <DetailDescriptor mainWidth={mainWidth} >Headquarters</DetailDescriptor>
        </DetailText>
      </Detail>
      <Detail>
        <Icon src={IconGlobe} alt='webpage' isExpanded={isExpanded} mainWidth={mainWidth} />
        {/* BEM TO DO: refactor icon to link */}
        <DetailText>
          <DetailHeading mainWidth={mainWidth} >www.fastservhvac.com<ExtLinkIcon /></DetailHeading>
          <DetailDescriptor mainWidth={mainWidth} >Website</DetailDescriptor>
        </DetailText>
      </Detail>
    </React.Fragment>
  )
}