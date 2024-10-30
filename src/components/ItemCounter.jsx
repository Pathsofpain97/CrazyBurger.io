import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export const ItemCounter = ({ onAdd, stock, initial }) => {
  const [count, setCount] = useState(initial);

  const handleIncreaseCount = () => {
    if (stock > count) setCount((prev) => prev + 1);
  };

  const handleDecreaseCount = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(initial);
  };

  return (
    <>
      <Container>
        <div className="containerc mb-4">
          <div className="resta me-1" onClick={handleDecreaseCount}>
            ➖
          </div>
          <input type="number" value={count} readOnly className="input-no-spinner"/>
          <div className="suma ms-1" onClick={handleIncreaseCount}>
            ➕
          </div>
        </div>
      </Container>
      <Container className="containerc text-center mb-4">
        <div>
          <Button size="lg" onClick={handleAdd} className="btn btn-warning mt-3 mb-3 me-3">Agregar al carrito</Button>{' '}
        </div>
      </Container>
    </>
  );
};

// Validación de props
ItemCounter.propTypes = {
  onAdd: PropTypes.func.isRequired, // `onAdd` debe ser una función y es requerida
  stock: PropTypes.number.isRequired, // `stock` debe ser un número y es requerido
  initial: PropTypes.number.isRequired, // `initial` debe ser un número y es requerido
};

export default ItemCounter;