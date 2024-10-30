import { Container } from 'react-bootstrap';

import Personajes from "../components/RickAndMorty";
import logito from '../assets/logo.jpg'
import '../styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer text-light mt-5">
            <hr />
            <Container>
                <div className='row justify-content-center'>
                    <Personajes></Personajes>
                </div>

                <div className='mt-2 mb-3'>
                <p className="textrick text-center mb-2" alt="Texto de Rick y Morty">
                        Rick y Morty ya comieron nuestras hamburguesas 🍔 ¿Y vos?
                </p>
                <p className="copyrigth text-center" alt="Texto de Crazy Burger Copyrigth">
                    © 2023 Crazy Burger, Inc.
                </p>
                <img src={logito} alt="Logo de Crazy Burger"  className='rounded mx-auto d-block mt-4'/>
                </div>

                <div className="text-center pt-4">
                    <ul className="list-unstyled">
                        <li className="textsociales mt-3">
                        <a href="https://www.facebook.com/SmashCarneAplastada/">
                            Nuestro Facebook
                        </a>
                        </li>
                        <li className="textsociales mt-3">
                            <a href="https://www.instagram.com/smash.carneaplastada/?hl=es">
                            Nuestro Instagram
                             </a>
                        </li>
                     </ul>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;