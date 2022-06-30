import React from 'react';
import styled from 'styled-components';

import IconBriefcase from '../../assets/img/icons/icon-briefcase.png';
import IconGlobe from '../../assets/img/icons/icon-globe.png';
import IconLocation from '../../assets/img/icons/icon-location.png';
import ExternalLink from '../../assets/img/icons/external-link.png';

import * as palette from '../../variables/Responsive';

const Detail = styled.div`
  padding: 5px;
  display: flex;
  width: 100%;
  min-width: 250px;

  vertical-align: inherit;
`

const DetailText = styled.div`
  display: flex;
  flex-direction: column;

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
  /* identical to box height, or 125% */
  letter-spacing: -0.02em;
  /* Blacks/002 */
  color: #2F2F4C;

  @media screen and (max-width: 599px) {
    font-size: ${palette.fontSizeMin}px;
  };

  @media screen and (min-width: 600px and max-width: 1100px) {
    font-size: ${props => (props.mainWidth <= 850) ? '100px' : `calc(${palette.fontSizeMin} + (100vw — ${palette.mobile}) / ${palette.screenDiff} * ${palette.fontSizeDiff})px`}
  };

  @media screen and (min-width: 1101px) { 
    font-size: ${palette.fontSizeMax}px;
  }
`

const DetailDescriptor = styled.h6.attrs()`
  margin: 0;
  padding: 0;

  font-weight: 400;
  /* identical to box height, or 114% */
  letter-spacing: -0.02em;
  /* Grays/003 */
  color: #6A698C;


  @media screen and (max-width: 599px) {
    font-size: ${palette.fontSizeSmMin}px;
  };

  @media screen and (min-width: 600px and max-width: 1100px) {
    font-size: ${props => (props.mainWidth <= 850) ? '100px' : `calc(${palette.fontSizeSmMin} + (100vw — ${palette.mobile}) / ${palette.screenDiff} * ${palette.fontSizeSmDiff})px`}
  };

  @media screen and (min-width: 1101px) { 
    font-size: ${palette.fontSizeSmMax}px;
  }
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
          <DetailHeading isExpanded={isExpanded} mainWidth={mainWidth} >Business Serivces </DetailHeading>
          <DetailDescriptor isExpanded={isExpanded} mainWidth={mainWidth} >Sector</DetailDescriptor>
        </DetailText>
      </Detail>
      <Detail>
        <Icon src={IconLocation} alt='headquarters' isExpanded={isExpanded} mainWidth={mainWidth} />
        <DetailText>
          <DetailHeading isExpanded={isExpanded} mainWidth={mainWidth} >Chicago, IL </DetailHeading>
          <DetailDescriptor isExpanded={isExpanded} mainWidth={mainWidth} >Headquarters</DetailDescriptor>
        </DetailText>
      </Detail>
      <Detail>
        <Icon src={IconGlobe} alt='webpage' isExpanded={isExpanded} mainWidth={mainWidth} />
        {/* BEM TO DO: refactor icon to link */}
        <DetailText>
          <DetailHeading isExpanded={isExpanded} mainWidth={mainWidth} >www.fastservhvac.com<ExtLinkIcon /></DetailHeading>
          <DetailDescriptor isExpanded={isExpanded} mainWidth={mainWidth} >Website</DetailDescriptor>
        </DetailText>
      </Detail>
    </React.Fragment>
  )
}