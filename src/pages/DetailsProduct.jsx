import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Fragment, useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useContext } from "react";

import { ItemCounter } from "../components/ItemCounter";
import { CartContext } from "../context/CartContext";
import Header from "../components/Navbar";
import '../styles/Details.css'; 

const DetailsProduct = () => {
    const [products, setProducts] = useState(null);
    const { id } = useParams();
    const { onAdd } = useContext(CartContext);

    const Add = (quantity) => {
        onAdd(products, quantity);
    };

    useEffect(() => {
        document.body.style.backgroundColor = '#121212'; 

        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, []);

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "products", id);

        getDoc(docRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data();
                setProducts({ 
                    id: docSnapshot.id, 
                    ...data, 
                    stock: Number(data.stock), // Convertir stock a número
                    price: Number(data.price)   // Convertir price a número
                });
            } else {
                console.log("No such document!");
            }
        });
    }, [id]);

    return (
        <>
            <Header /> {/* Renderiza el Navbar aquí */}
            <Container className='pc mt-5'>
                {products && (
                    <Fragment>
                        <div className="dimg text-center">
                            <img className="img" src={products.imgURL} alt={products.title} />
                        </div>
                        <h1 className="pct">{products.title}</h1>
                        <p className="pctx1">${products.price}</p>
                        <ItemCounter onAdd={Add} stock={products.stock} initial={1} />
                    </Fragment>
                )}
            </Container>
        </>
    );
};

export default DetailsProduct;
