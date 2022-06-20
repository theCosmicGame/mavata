import React, { useState } from 'react';
import { MDBIcon, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

function SideNavPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen({
      isOpen: !isOpen
    });
  };

    return (
      <Router>
        <MDBContainer>
          <MDBRow>
            <MDBBtn onClick={handleToggle}><MDBIcon icon="bars" size="5x" /></MDBBtn>
          </MDBRow>
          <MDBSideNav
            logo="https://mdbootstrap.com/img/logo/mdb-transparent.webp"
            hidden
            triggerOpening={isOpen}
            breakWidth={1300}
            className="deep-purple darken-4"
          >
            <li>
              <ul className="social">
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="google-plus-g" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="twitter" />
                  </a>
                </li>
              </ul>
            </li>
            <MDBSideNavNav>
              <MDBSideNavCat
                name="Submit blog"
                id="submit-blog"
                icon="chevron-right"
              >
                <MDBSideNavLink>Submit listing</MDBSideNavLink>
                <MDBSideNavLink>Registration form</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat
                name="Instruction"
                id="instruction"
                iconRegular
                icon="hand-pointer"
                href="#"
              >
                <MDBSideNavLink>For bloggers</MDBSideNavLink>
                <MDBSideNavLink>For authors</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="About" id="about" icon="eye">
                <MDBSideNavLink>Instruction</MDBSideNavLink>
                <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="Contact me" id="contact-me" iconRegular icon="envelope">
                <MDBSideNavLink>FAQ</MDBSideNavLink>
                <MDBSideNavLink>Write a message</MDBSideNavLink>
              </MDBSideNavCat>
            </MDBSideNavNav>
          </MDBSideNav>
        </MDBContainer>
      </Router>
    );
  }

export default SideNavPage;