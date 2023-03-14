import React, {useContext, useState} from "react";
import {CartContext} from "../../context/CartContext";
import "./Checkout.css"
import {pushItem} from "../../database/firebase";
import {useNavigate} from "react-router-dom";

function Checkout() {
    const {productCartList, getProductsTotal, clearProductCartList} = useContext(CartContext);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setConfirmEmail] = useState("");

    const handleNameChange = (event) => setName(event.target.value);
    const handlePhoneChange = (event) => setPhone(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handleEmailConfirmChange = (event) => setConfirmEmail(event.target.value);

    function summary(id) {
        navigate('/summary/' + id);
    }


    function enoughStock() {
        for (let i = 0; i < productCartList.length; i++) {
            const item = productCartList[i];
            if (item.stock - item.quantity < 0) {
                return false
            }
        }
        return true;
    }


    function checkFields() {
        if (!enoughStock()) {
            alert("No hay suficiente stock")
            return false
        } else if (name.length === 0) {
            alert("Llenar el campo Nombre y Apellido")
            return false
        } else if (phone.length === 0) {
            alert("Llenar el campo Teléfono")
            return false
        } else if (email.length === 0) {
            alert("Llenar el campo email")
            return false
        } else if (email !== emailConfirm) {
            alert("Los emails no coinciden")
            return false
        } else {
            return true
        }
    }


    const handleSubmit = (event) => {
        if (!checkFields()) {
            return
        }
        const customerInfo = {name, phone, email, productCartList};
        pushItem("order", customerInfo).then(order => {
            summary(order.id)
        }).catch(e => console.log(e)).finally(() => {
                clearProductCartList();
            }
        )
    };

    return (
        <div>
            <h2>Resumen de Compra</h2>
            <div className="checkout">
                <div className="form">
                    <label>
                        Nombre y Apellido
                    </label>
                    <input type="text" value={name} onChange={handleNameChange}/>
                    <label>
                        Teléfono
                    </label>
                    <input type="text" value={phone} onChange={handlePhoneChange}/>
                    <label>
                        Email
                    </label>
                    <input type="text" value={email} onChange={handleEmailChange}/>
                    <label>
                        Confirmar Email
                    </label>
                    <input type="text" value={emailConfirm} onChange={handleEmailConfirmChange}/>
                    <br></br>
                    <button className="button-cart" onClick={handleSubmit}>Realizar Compra</button>
                </div>
                <div>
                    <h3>Productos</h3>
                    <table className="item-list-container-checkout">
                        <tbody>
                        {productCartList.map((item) => (
                            <tr key={item.id}>
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
                    <h2>${getProductsTotal()}</h2>
                </div>
            </div>
        </div>
    );
}

export default Checkout;