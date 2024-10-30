import  { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import '../styles/items.css';

const Personajes = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(data => setPersonajes(data.results));
    }, []);

    return (
        <Container className="ricknmorty mb-3 mr-2">
                {personajes.map(personaje => {
                    if (personaje.id > 2) return null; // Filtrar personajes con id > 2

                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={personaje.image} />
                            <Card.Body>
                            <Card.Title className="ct">{personaje.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    );
                })}
        </Container>
    );
};

export default Personajes;