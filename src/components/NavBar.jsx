/*import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiJourney } from 'react-icons/gi';
import '../style/NavBar.css'


const NavBar = () => {
  return (
    <Navbar collapseOnSelect className='nvb' expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='N'>MyJourneys<GiJourney/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;*/

import '../style/NavBar.css'
import React , { Component}  from 'react';
import { Link } from 'react-router-dom';
import c from '../img/Fprofilo.jpg';

export default function NavBar() {
    return (
        <div className='top'>
            <div className='topLeft'>
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'><Link className='linkNav' to='/'>HOME</Link> </li>
                    <li className='topListItem'><Link className='linkNav' to='/info'>INFO</Link></li>
                    <li className='topListItem'><Link className='linkNav' to='/scrivi'>SCRIVI</Link></li>
                    <li className='topListItem'><Link className='linkNav' to='/log'>LOGOUT</Link></li>
                </ul>
            </div>
            <div className='topRight'>
            <Link className='linkNav' to='/set'><img
                className='topImg'
                src={c} 
                alt='fotoprofilo' 
                /></Link>
            </div>
        </div>
    )
}