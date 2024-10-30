import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Para navegar a otra página
import { useEffect } from "react";


import '../styles/Error.css'; 

export const Error404 = () => {
    const navigate = useNavigate(); // Hook para navegar

    useEffect(() => {
        // Cambia el estilo del body al montar el componente
        document.body.style.backgroundColor = '#121212'; // Cambia el color de fondo

        // Limpia el estilo cuando el componente se desmonte
        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, []); // El arreglo vacío asegura que esto solo se ejecute al montar y desmontar

    return (
        <Container className="mt-5 text-center">
            <h1 className="etx">¿Nos quedamos sin 🍔? o ¿estás perdido? 👻😨</h1>
            <p className="ep">¿Te ayudamos?</p>
            <p className="ep">Presiona este ⬇️​ ​botón mágico</p>
            <Button variant="warning" size="lg" onClick={() => navigate("/Home")} className="mt-4">
                Volver a la Home
            </Button>
        </Container>
    );
};