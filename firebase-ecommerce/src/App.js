import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CartContainer} from './components/CartContainer/CartContainer';
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartProvider} from './context/CartContext';
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import Checkout from "./components/Checkout/Checkout";
import Summary from "./components/Summary/Summary";

function App() {

    return (
        <CartProvider>
            <BrowserRouter>
                <div className="App">
                    <div>
                        <NavBar/>
                        <Routes>
                            <Route path='/' element={<ItemListContainer/>}/>
                            <Route path="/category/:productType" element={<ItemListContainer/>}/>
                            <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
                            <Route path="/cart" element={<CartContainer/>}/>
                            <Route path="/checkout" element={<Checkout/>}/>
                            <Route path="/summary/:orderId" element={<Summary/>}/>
                            <Route path='*' element={<ItemListContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
