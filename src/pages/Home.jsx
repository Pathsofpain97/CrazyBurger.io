import { useEffect } from 'react';
import { Container } from "react-bootstrap";


import '../styles/Home.css'; 
import  Header  from "../components/Navbar";
import  Reloj  from "../components/Clock";
import { ItemListContainer } from "../components/ItemListContainer";

const Home = () => {
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
  <div className="home-page">
    <header>
      <Header></Header>
    </header>

    <div>
      <Container>
      <Reloj></Reloj>
      <div>
      <ItemListContainer/>
      </div>
      </Container>
    </div>
  </div>
  );
};

  export default Home;