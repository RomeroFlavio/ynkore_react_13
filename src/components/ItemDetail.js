import ItemCount from "./ItemCount";
import { useState } from 'react';
import Intercambiabilidad from "./Intercambiabilidad";
import { useCartContext } from "../context/CartContext";



const ItemDetail = ({data}) => {

    const [state, setState] = useState(0);

    const { addToCart } = useCartContext()

    const onAdd = (count) => {
        
        setState(count)
        addToCart({...data, cantidad: count})
    }

    return <>

        <div className="estilo_tarjeta">
            <img src={`../${data.url}`} className="card-img-top imgMedida" alt="img"/>
            <div>
                <h2 className="card-title">{data.nombre}</h2>
                <p className="card-text">{data.precio}</p>
                <p className="card-text">Stock: {data.stock}</p>
                <p className="card-text">Descrip: {data.descr}</p>

                {
                    state === 0 ?
                    <ItemCount stock={data.stock} initial={1} onAdd={onAdd}/>
                    :
                    <Intercambiabilidad/>
                }
                
            </div>
        </div>
    </>;
}
export default ItemDetail;