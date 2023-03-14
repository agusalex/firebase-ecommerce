import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import {ItemCount} from '../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({item}) => {
    const {addProduct, cartStockOfItem} = useContext(CartContext);

    const onAdd = (count) => {
        if (item.stock - cartStockOfItem(item.id) - count  >= 0) {
            addProduct(item, count);
        } else {
            alert("No hay suficiente stock")
        }
    }

    return (
        <div className='detail-container'>
            <div className='img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='img-container'>
                <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
                <h5>{item.description}</h5>
            </div>
            <ItemCount initial={1} stock={item.stock - cartStockOfItem(item.id)} onAdd={onAdd}/>
        </div>
    )
}