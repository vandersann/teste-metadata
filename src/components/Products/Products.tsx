// src/pages/Products.tsx

import React, { useState, useEffect } from 'react';
import api from '../Products/Products';
import SearchBar from '../SearchBar/SearchBar';

interface Product {
    id: number;
    name: string;
    price: number;
}

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

useEffect(() => {
    const fetchProducts = async () => {
    setLoading(true);
    try {
        const response = await api.get('/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
        } catch (error) {
        console.error('Error fetching products:', error);
        } finally {
        setLoading(false);
        }
    };

    fetchProducts();
}, []);

const handleSearch = (query: string) => {
    const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
};

return (
    <div>
        <h2>Produtos</h2>
        <SearchBar onSearch={handleSearch} />
        {loading ? (
            <p>Carregando produtos...</p>
    ) : (
        <Products products={filteredProducts} />
    )}
    </div>
);
};

export default ProductsPage;
