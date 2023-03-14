import './ItemListContainer.css';
import banner from "../../assets/banner.jpeg"
import {ItemList} from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllItems, getAllItemsByField} from "../../database/firebase";

export const ItemListContainer = () => {
    const {productType} = useParams();

    const [productos, setProductos] = useState([]);

    const promesa = productType !== undefined ? getAllItemsByField("items", "category", productType) : getAllItems("items")

    useEffect(() => {
        promesa.then(resultado => {
            if (!productType) {
                setProductos(resultado)
            } else {
                const nuevaLista = resultado.filter(item => item.category === productType);
                setProductos(nuevaLista)
            }
        })
    }, [productType, promesa])
    return (
        <div className="banner-container">
            <div className="container-b">
                <img className="banner" src={banner} alt="banner"/>
                <p className="banner-text">At DecoShop, we believe that a space should not just be functional, but also an expression of your unique style and personality. That's why we offer bespoke decoration and interior design services that bring your vision to life. Our team of experts carefully curates each piece and artwork to create a truly one-of-a-kind space that inspires and delights. Let DecoShop transform your home or business into a reflection of your individuality, and experience the joy of a space that truly resonates with you.
                </p>
            </div>
            <div className="item-list-container">
                <ItemList items={productos}/>
            </div>
        </div>
    )
}
