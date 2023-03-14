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
                <p className="banner-text">En DecoShop, nos dedicamos a crear espacios que emocionen tanto por dentro
                    como por fuera de tu hogar o negocio. Ofrecemos proyectos de decoración e interiorismo con un toque
                    personal y auténtico, gracias a nuestra selección cuidadosa de piezas únicas y obras de arte.
                    ¡Descubre cómo podemos transformar tu espacio en un lugar especial con DecoShop!
                </p>
            </div>
            <div className="item-list-container">
                <ItemList items={productos}/>
            </div>
        </div>
    )
}