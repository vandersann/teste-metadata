

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetailsPage from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import { CartProvider } from './Context/CarContext';
import './App.scss';

const App: React.FC = () => {
    return (
        <Router>
        <div className="app">
            <CartProvider>
            <Navbar />
            <div className="content">
                <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/products" exact component={ProductsPage} />
                <Route path="/products/:id" component={ProductDetailsPage} />
                <Route path="/cart" component={CartPage} />
                </Switch>
            </div>
            </CartProvider>
        </div>
        </Router>
    );
};

export default App;
