import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom";

export const NavBar = () => {

    return (
        <div className="navbar-m" id="navbarNav">
            <Link className="link" to="/">
                <div>
                    <h1 className="title">DecoShop</h1>
                </div>
            </Link>
            <Link className="link" to="/category/interior">Interiores</Link>
            <Link className="link" to="/category/exterior">Exteriores</Link>
            <Link className="link" to="/cart">
                <CartWidget></CartWidget>
            </Link>
        </div>
    );
};