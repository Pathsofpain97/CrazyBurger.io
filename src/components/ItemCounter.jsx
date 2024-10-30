import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

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
      <Container>
      <div className="containerc mb-4">
      <Button variant="warning" size="lg" onClick={handleAdd} className="me-4">Agregar al carrito</Button>{' '}
      </div>
      </Container>
    </>
  );
};