import React from 'react';
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import {CartItem} from '../CartItem/CartItem';
import {useNavigate} from 'react-router-dom';

export const CartContainer = () => {
    const navigate = useNavigate();
    const {productCartList, clearProductCartList} = useContext(CartContext);

    function checkout() {
        navigate('/checkout');
    }

    return (
        <div>
            {productCartList.length > 0 ?
                <button className="button-cart" onClick={clearProductCartList}>Vaciar el carrito</button> : <div></div>}
            <div>
                {
                    productCartList.length > 0 ?
                        <>
                            {
                                productCartList.map(item => (
                                    <CartItem key={item.id} item={item}/>
                                ))
                            }
                            <hr/>

                            <br></br>
                            <button className="button-cart" onClick={checkout}>Finalizar Compra</button>
                        </>
                        :
                        <h1>No has agregado productos</h1>
                }
            </div>
        </div>
    )
}
