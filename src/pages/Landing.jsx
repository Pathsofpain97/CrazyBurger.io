import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../App.css'; 
import burgerImage from '../assets/burgerinicio.png';


const Landing = () => {
    const navigate = useNavigate();
  
    const handleNavigate = () => {
      navigate('/Home');
    };

  return (
  <Container className="container1">
    <Card className="card1">
        <motion.div className="burger"
                  initial={{ scale:0 }}
                  animate={{ scale:1 }}
                  transition={{ duration: 4, ease: 'easeInOut', delay: 0.4 }}>
          <div className="circle"></div>
            <Card.Img variant="top" src={burgerImage} />
        </motion.div>
      <Card.Body className="info">
        <Card.Title>
            <h1>¡Llegaste! Bienvenido/a Crazy Burger</h1>
            <p>Smash Burgers para Toda la familia</p>
        </Card.Title>
         <motion.div className="bienvenido"
                initial={{ scale:0 }}
                animate={{ scale:1 }}
                transition={{ duration: 4.5, ease: 'easeInOut', delay: 0.5 }}>
          <Button id="b1" onClick={handleNavigate}>¿Estás listo/a para pedir?</Button>
        </motion.div>
      </Card.Body>
    </Card>
    </Container>
    );
  };
  

  export default Landing;