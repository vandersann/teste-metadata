
    import React from 'react';
    import { useParams } from 'react-router-dom';
    import Header from '../components/Header/Header';
    import ProductDetails from '../components/ProductDetails/ProductDetails';
    import Footer from '../components/Footer/Footer';

    const ProductDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
        <Header />
        <h1>Detalhes do Produto</h1>
        <ProductDetails id={id} />
        <Footer />
        </div>
    );
    };

    export default ProductDetailsPage;
