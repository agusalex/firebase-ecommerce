import {useState, useEffect, useContext} from "react";
import './ItemDetailContainer.css';
import {ItemDetail} from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import {getItemByID} from "../../database/firebase";


export const ItemDetailContainer = () => {
    const {productId} = useParams();

    const [item, setItem] = useState({});


    useEffect(() => {
        const getProducto = async () => {
            try {
                const producto = await getItemByID("items", productId)
                setItem(producto);
            } catch (e) {
                console.log(e)
            }
        }
        getProducto();
    }, [productId])

    return (
        <div className="item-detail-container">
            {!item && <h1>Producto no Encontrado</h1>}
            {item && <ItemDetail item={item}/>}
        </div>
    )
}