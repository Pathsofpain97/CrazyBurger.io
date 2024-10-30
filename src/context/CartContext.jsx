import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    // Función para limpiar el carrito
    const clear = () => setItems([]);

    // Función para agregar un item al carrito
    const onAdd = (item, quantity) => {
        const exists = items.some((i) => i.id === item.id);
        if (exists) {
            const updatedItems = items.map((i) => {
                if (i.id === item.id) {
                    return {
                        ...i,
                        quantity: i.quantity + quantity,
                    };
                }
                return i;
            });
            setItems(updatedItems);
        } else {
            setItems((prev) => [...prev, { ...item, quantity }]);
        }
    };

    // Función para eliminar un item del carrito
    const onRemove = (id) => {
        const filteredItems = items.filter((item) => item.id !== id);
        setItems(filteredItems);
    };

    return (
        <CartContext.Provider value={{ items, clear, onAdd, onRemove }}>
            {children}
        </CartContext.Provider>
    );
};

// Validación de Props
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};