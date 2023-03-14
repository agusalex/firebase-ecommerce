import {createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [productCartList, setProductCartListVar] = useState(JSON.parse(window.localStorage.getItem('CART_STATE')) || []);

    const isInCart = (id) => {
        const elementExists = productCartList.some((elemento) => elemento.id === id);
        return elementExists;
    }

    function setProductCartList(cart) {
        window.localStorage.setItem('CART_STATE', JSON.stringify(cart));
        setProductCartListVar(cart)
    }

    const addProduct = (product, qty) => {
        const newList = [...productCartList];
        if (isInCart(product.id)) {
            const productIndex = productCartList.findIndex(element => element.id === product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].price;
            setProductCartList(newList)
        } else {
            const newProduct = {...product, quantity: qty, totalPrice: qty * product.price}

            const newList = [...productCartList];
            newList.push(newProduct);
            setProductCartList(newList);
        }
    }

    const removeProduct = (idProduct) => {
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm => elm.id !== idProduct);
        setProductCartList(newArray);
    }

    const clearProductCartList = () => {
        setProductCartList([])
    }

    const getTotalProducts = () => {
        return productCartList.reduce((acc, item) => acc + item.quantity, 0);
    }

    const cartStockOfItem = (id) => {
        for (let i = 0; i < productCartList.length; i++) {
            const item = productCartList[i];
            if (item.id === id ) {
                return item.quantity
            }
        }
        return 0;
    }

    const getProductsTotal = () => {
        let total = 0;
        for (let i = 0; i < productCartList.length; i++) {
            const item = productCartList[i];
            total += item.price * item.quantity;
        }
        return total;
    }

    return (<CartContext.Provider
            value={{
                productCartList,
                addProduct,
                removeProduct,
                clearProductCartList,
                isInCart,
                getTotalProducts,
                getProductsTotal,
                cartStockOfItem
            }}>
            {children}
        </CartContext.Provider>)
}