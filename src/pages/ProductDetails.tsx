
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

interface Product {
    id: number;
    name: string;
    price: number;
}

const ProductDetailsPage: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
    const fetchProduct = async () => {
        try {
        const response = await api.get<Product>(`/products/${id}`);
        setProduct(response.data);
        } catch (error) {
        console.error('Error fetching product details:', error);
        }
    };

    fetchProduct();
    }, [id]);

return (
    <div>
        {product ? (
        <div>
            <h2>{product.name}</h2>
            <p>Preço: R$ {product.price}</p>
        </div>
    ) : (
        <p>Carregando detalhes do produto...</p>
    )}
    </div>
    );
};

export default ProductDetailsPage;
