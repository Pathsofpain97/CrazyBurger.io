import cart from '../assets/shopping-cart-37.png'

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import '../styles/Home.css'; 

export const CartWidget = () => {
    const {items} = useContext(CartContext)

    const total = items.reduce((acumulador,valorActuar) => acumulador + valorActuar.quantity, 0);

    return (
    <div>
        <img src={cart} alt="Carrito" />
        <span className="numero">{total}</span>
    </div>
    );
}; 