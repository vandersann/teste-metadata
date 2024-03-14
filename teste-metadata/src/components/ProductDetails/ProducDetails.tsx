// src/pages/ProductDetails.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import AddToCartButton from '../components/AddToCartButton/AddToCartButton';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const ProductDetailsPage: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams<{ id: string }>();

useEffect(() => {
    const fetchProduct = async () => {
        setLoading(true);
        try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
        } catch (error) {
        console.error('Error fetching product:', error);
        } finally {
        setLoading(false);
        }
    };

    fetchProduct();
    }, [id]);

return (
    <div>
    {loading ? (
        <p>Carregando produto...</p>
    ) : product ? (
        <div>
          // src/pages/ProductDetails.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import AddToCartButton from '../components/AddToCartButton/AddToCartButton';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    {'>'}, [id]);

    return (
    <div>
        {loading ? (
        <p>Carregando produto...</p>
    ) : product ? (
        <div>
            <h2>{product.name}</h2>
            <p>Preço: R$ {product.price}</p>
            <p>{product.description}</p>
            <AddToCartButton
            productId={product.id}
            productName={product.name}
            productPrice={product.price}
        />
        </div>
    ) : (
        <p>Produto não encontrado.</p>
    )}
    </div>
  );
};

export default ProductDetailsPage;

            productId={product.id}
            productName={product.name}
            productPrice={product.price}
          />
        </div>
      ) : (
        <p>Produto não encontrado.</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;
