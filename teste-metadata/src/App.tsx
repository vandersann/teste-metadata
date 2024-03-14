// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import CategoriesPage from './pages/Categories';
import ProductDetailsPage from './pages/ProductDetails';
import ProductEditPage from './pages/ProductEditPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './Context/CarContext';
import './App.scss';

const App: React.FC = () => {
return (
    <Router>
    <div className="app">
        <Navbar />
    <div className="content">
        <CartProvider>
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/products" component={ProductsPage} />
            <Route exact path="/categories" component={CategoriesPage} />
            <Route exact path="/products/:id" component={ProductDetailsPage} />
            <Route exact path="/products/:id/edit" component={ProductEditPage} />
            <Route exact path="/cart" component={CartPage} />
            </Switch>
        </CartProvider>
        </div>
    </div>
    </Router>
);
};

export default App;
