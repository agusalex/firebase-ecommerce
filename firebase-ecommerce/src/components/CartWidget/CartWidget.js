import React, {useContext} from 'react';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './CartWidget.css';
import {CartContext} from "../../context/CartContext";

const CartWidget = () => {
    const {getTotalProducts, productCartList} = useContext(CartContext);
    return (
        <div className="cart">
            <FontAwesomeIcon className="icon" size="1x" icon={faCartShopping} color="white"/>
            <div className="cart-font">{getTotalProducts()}</div>
        </div>

    );
};

export default CartWidget;