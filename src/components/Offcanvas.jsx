import { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/Home.css'; 

import { Button, Offcanvas, Container } from "react-bootstrap";
import { CartWidget } from "../components/CartWidget";
import { Cart } from "./Cart";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {name === 'end' && (
        <Button className="position-absolute top-0 end-0 btn-warning btn-lg Carrito" onClick={handleShow}>
            <CartWidget />
        </Button>
      )}
      <Container>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header className='offcanvas-header' closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body className='offcanvas-body'>
            <Cart /> 
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
}

OffCanvasExample.propTypes = {
  name: PropTypes.string.isRequired,
  placement: PropTypes.string,
};

function OffCanvasNavbar() {
  return (
    <>
      <OffCanvasExample placement="end" name="end" />
    </>
  );
}

export default OffCanvasNavbar;