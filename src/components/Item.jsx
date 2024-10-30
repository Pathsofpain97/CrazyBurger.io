import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export const Item = ({ item }) => {
  if (!item) return null; // Manejo de errores

  return (
    <div className="hamburger mb-3 mr-2">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.imgURL} alt={item.title} />
        <Card.Body>
          <Card.Title className="ct">{item.title}</Card.Title>
          <Card.Text className="ctx1">{item.description}</Card.Text>
          <Card.Text className={`ctx2 ${item.stock}`}>
            Nos quedan {item.stock}
          </Card.Text>
          <Card.Text className="ctx2">${item.price}</Card.Text>
          <Link to={`/items/${item.id}`} className="btn btn-dark">Comprar</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Permitir string o number
    imgURL: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};