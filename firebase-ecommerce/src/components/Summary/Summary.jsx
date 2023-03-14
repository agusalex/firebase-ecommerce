import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getItemByID} from "../../database/firebase";
import "./Summary.css"

function Summary() {
    const {orderId} = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        const getOrder = async () => {
            try {
                const order = await getItemByID("order", orderId)
                setOrder(order);
            } catch (e) {
                console.log(e)
            }
        }
        getOrder();
    }, [orderId])

    function calculateProductsTotal() {
        let total = 0;
        if (order.productCartList) {
            for (let i = 0; i < order.productCartList.length; i++) {
                const item = order.productCartList[i];
                total += item.price * item.quantity;
            }
        }
        return total;
    }


    return (
        <div>
            <h1>Gracias por su compra</h1>
            <h2>Su ID de orden es: {orderId}</h2>
            <table className="item-list-container-checkout">
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
                </thead>
                <tbody>
                {order.productCartList && order.productCartList.map((item) => (
                    <tr>
                        <td>{item.title}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>${item.totalPrice}</td>
                    </tr>
                ))}
                <tr>
                    <td></td>
                    <td></td>

                </tr>
                </tbody>
            </table>
            <h2>Total:</h2>
            <h2>${calculateProductsTotal()}</h2>
        </div>
    )
}

export default Summary;