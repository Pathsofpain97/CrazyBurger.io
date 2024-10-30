import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { Item } from "./Item";
import { getFirestore, getDocs, collection } from 'firebase/firestore';

import '../styles/items.css';

export const ItemListContainer = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, "products");

        getDocs(productsCollection).then((querySnapshot) => {
            let products = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return { 
                    id: doc.id, 
                    ...data, 
                    stock: Number(data.stock),  // Convertir stock a número
                    price: Number(data.price)   // Convertir price a número
                };
            });
            if (id) {
                products = products.filter(item => item.category && item.category.toLowerCase() === id.toLowerCase());
            }
            setProducts(products);
        });
    }, [id]);

    return (
        <Container className='mt-4'>
            <h1 className="text-center mb-4"></h1>
            <div className="hamburger-list">
                {
                    products.map(item => <Item key={item.id} item={item} />)
                }
            </div>
        </Container>
    );
};