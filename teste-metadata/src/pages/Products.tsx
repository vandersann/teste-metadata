// src/pages/Products.tsx

import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Products from '../components/Products/Products';
import SearchBar from '../components/SearchBar/SearchBar';
import './ProductsPage.scss';

interface Product {
    id: number;
    name: string;
    price: number;
}

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
    async function fetchProducts() {
        try {
        const response = await api.get('/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
    } finally {
        setLoading(false);
        }
    }

    fetchProducts();
}, []);

const handleSearch = (query: string) => {
    const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
};

return (
    <div className="products-page">
        <h1>Produtos</h1>
        <SearchBar onSearch={handleSearch} />
        {loading ? (
        <p>Carregando...</p>
    ) : (
        <Products products={filteredProducts} />
    )}
    </div>
);
};

export default ProductsPage;
