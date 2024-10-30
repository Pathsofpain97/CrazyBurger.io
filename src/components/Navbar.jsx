import { Container, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

import '../styles/Home.css'; 

import { LogoWidget } from "../components/Logo";
import  OffCanvasNavbar  from "../components/Offcanvas";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleToggleOffCanvas = () => {
    setShowOffCanvas(!showOffCanvas);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar expand="lg" className="container-fluid mb-4 NvBar">
        <Container className="container d-flex align-items-center justify-content-between">
          <Navbar.Brand>
            <NavLink to="/Home" className="position-absolute top-0 start-0 logo">
              <LogoWidget />
            </NavLink>
          </Navbar.Brand>

          {!isMobile && <Navbar.Toggle className="bg-light" onClick={handleToggleOffCanvas} />}

          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {isMobile && (
                <button className="btn btn-link" onClick={handleToggleOffCanvas}>
                  Menú
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Renderiza el OffCanvasNavbar basado en el estado */}
      <OffCanvasNavbar show={showOffCanvas} handleClose={handleToggleOffCanvas} />
    </>
  );
}

export default Header;