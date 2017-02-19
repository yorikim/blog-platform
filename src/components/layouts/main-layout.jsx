import React, {PropTypes} from 'react';
import Link from 'components/elements/link';
import {Nav, Navbar} from 'react-bootstrap';

const MainLayout = ({children}) => (
  <div>
    <Nav>
      <div className="container">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">React Blog</Link>
          </Navbar.Brand>
        </Navbar.Header>
      </div>
    </Nav>

    <div className="container">
      {children}
    </div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
