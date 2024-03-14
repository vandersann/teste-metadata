
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Products from '../components/Products/Products';
import SearchBar from '../components/SearchBar/SearchBar';

interface Product {
    id: number;
    name: string;
    price: number;
}

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
    const fetchProducts = async () => {
        try {
        const response = await api.get<Product[]>('/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
        } catch (error) {
        console.error('Error fetching products:', error);
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
        <h1>Produtos</h1>
        <SearchBar onSearch={handleSearch} />
        <Products products={filteredProducts} />
    </div>
);
};

export default ProductsPage;
