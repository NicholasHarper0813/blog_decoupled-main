import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: "nav-active" } : null;

const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <TitleNavContainer>
      <TitleHeader>
        <Link to="/">{siteTitle}</Link>
      </TitleHeader>
      <NavMenu id="menu">
        <NavItem>
          <Link
            to="/article/"
            activeClassName="nav-active"
            getProps={isPartiallyActive}
          >
            Article
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/video/"
            activeClassName="nav-active"
            getProps={isPartiallyActive}
          >
            Video
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/code/"
            activeClassName="nav-active"
            getProps={isPartiallyActive}
          >
            Code
          </Link>
        </NavItem>
      </NavMenu>
    </TitleNavContainer>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

const TitleNavContainer = styled.div`
  margin: 0 auto;
  max-width: 840px;
  padding: 0px 1.0875rem;
  padding-top: 0;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledHeader = styled(Header)`
  color: var(--white);
  background: var(--primary-color);
  padding: 1rem 0;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
  }
`;

const TitleHeader = styled.h1`
  float: left;
`

const NavMenu = styled.ul`
  display: inline-block;
  float: right;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  margin-left: 0;
`;

const NavItem = styled.li`
  display: inline;
  a {
    padding: 5px 10px;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      border-bottom: 1px solid;
  }
  &:hover {
    border-bottom: 1px solid #139fc9;
  }
`;

export default StyledHeader;
