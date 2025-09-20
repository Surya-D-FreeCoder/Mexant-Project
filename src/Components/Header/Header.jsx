import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from "../../Assets/logo (1).png"
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <section className='header'>
      <Navbar expand="lg"  data-bs-theme= 'dark' className='py-3'>
      <Container>
        <img src={logo} alt='logos' className='header-logo'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto gap-5">
                <NavLink className={({ isActive }) => (isActive ? "menubar active" : "menubar")} as={ NavLink } to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "menubar active" : "menubar")} as={ NavLink } to="/about" >About</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "menubar active" : "menubar")} as={ NavLink } to="/service" >Service</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "menubar active" : "menubar")} as={ NavLink } to="/contact" >Contact</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "menubar active" : "menubar")} as={ NavLink } to="/test" >Testimonials</NavLink>
              {/*<NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>*/}
              <Button variant="success">Success</Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </section>
  )
}
