import cart from '../assets/shopping-cart-37.png'

import '../styles/Home.css'; 

export const CartWidget = () => {

    return (
    <div>
        <img src={cart} alt="Carrito" />
        <span className="numero">o</span>
    </div>
    );
}; 