import { useContext, useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


import Table from 'react-bootstrap/Table';
import Swal from 'sweetalert2';

import { CartContext } from "../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import '../styles/Cart.css'; 

const initialValues = {
    name: "",
    direction: "",
    phone: ""
};

export const Cart = () => {
    const { clear, items } = useContext(CartContext);
    const [buyer, setBuyer] = useState(initialValues);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setBuyer({
            ...buyer,
            [event.target.name]: event.target.value,
        });
    };

    const sendOrder = () => {
        // Validar que los campos del formulario estén completos
        if (!buyer.name || !buyer.direction || !buyer.phone) {
            Swal.fire({
                icon: "error",
                title: "Oops...⚠️",
                text: "Por favor completa los campos antes de comprar🍔.",
            });
            return;
        }

        const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0); // Calcular el total

        const order = {
            buyer,
            items,
            total,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                Swal.fire({
                    title: "Su orden ha sido completada!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                });
                setBuyer(initialValues);
                clear();
                navigate("/Home"); // Redirigir a la página de inicio o a donde desees
            }
        });
    };

    if (!items.length) {
        return (
            <Container className='mt-5 mb-4 text-center'>
                <h2 className="cartt">Carrito Vacío 😱</h2>
                <Button size="lg" className="btn btn-dark mt-3" onClick={() => navigate("/Home")}>
                    Volver a la Home
                </Button>
            </Container>
        );
    }

    const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <Container className='cartcon mt-4 text-center'>
            <h1 className="cartext mb-3">Carrito</h1>

            <Container className="d-flex justify-content-center my-3">
                <Table striped="columns" responsive="xl" variant="dark">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items?.map(item => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price}</td>
                                <td><img src={item.imgURL} width={110} alt={item.title} /></td>
                            </tr>
                        ))}
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td></td>
                            <td>${total}</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className="fl mt-2 mb-2">Ingresa tu nombre</Form.Label>
                        <Form.Control
                            className="mt-2"
                            type="text"
                            placeholder="Escribe tu nombre"
                            value={buyer.name}
                            onChange={handleChange}
                            name="name"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="fl mt-2 mb-2">Ingresa tu dirección</Form.Label>
                        <Form.Control
                            className="mt-2"
                            type="text"
                            placeholder="Escribe tu dirección"
                            value={buyer.direction}
                            onChange={handleChange}
                            name="direction"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="fl mt-2 mb-2">Ingresa tu teléfono</Form.Label>
                        <Form.Control
                            className="mt-2"
                            type="tel"
                            placeholder="Escribe tu número de teléfono"
                            value={buyer.phone}
                            onChange={handleChange}
                            name="phone"
                            required
                        />
                    </Form.Group>
                </Form>
                <Button size="lg" className="btn btn-dark mt-3 mb-3" onClick={sendOrder}>Comprar</Button>
            </Container>

            <Container className="text-center">
                <hr />
                <Button size="lg" className="btn btn-warning mt-3 mb-3" onClick={clear}>Vaciar Carrito</Button>
                <hr />
            </Container>
        </Container>
    );
};