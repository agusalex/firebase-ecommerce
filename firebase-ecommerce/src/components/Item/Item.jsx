import './Item.css';
import {Link} from 'react-router-dom';

export const Item = ({item}) => {
    return (
        <Link to={`/item/${item.id}`}>
            <div className="tarjeta-producto">
                <img src={item.pictureUrl} alt={item.title}/>
                <p className="no-link-style">{item.title}</p>
                <p className="no-link-style">$ {item.price}</p>
            </div>
        </Link>
    )
}