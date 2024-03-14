
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar: React.FC = () => {
    return (
    <nav className="navbar">
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/products">Produtos</Link>
        </li>
        <li>
            <Link to="/categories">Categorias</Link>
        </li>
        <li>
            <Link to="/cart">Carrinho</Link>
        </li>
    </ul>
    </nav>
    );
};

export default Navbar;
