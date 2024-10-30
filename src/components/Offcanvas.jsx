import { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/Home.css'; 

import { Button, Offcanvas, Container } from "react-bootstrap";
import { CartWidget } from "../components/CartWidget";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {name === 'end' && (
        <Button className="position-absolute top-0 end-0 btn-warning btn-lg Carrito" onClick={handleShow}>
            <CartWidget></CartWidget>
        </Button>
      )}
      <Container className="container-fluid d-flex flex-row-reverse">
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
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