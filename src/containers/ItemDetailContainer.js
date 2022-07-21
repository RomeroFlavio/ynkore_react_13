import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch('/productos.json')
            .then((res) => res.json())
            .then((json) => setProductos(json.filter(prod => prod.id === id)))
        }, 2000);
    }, []);
    return(

        productos.map((catalogo) => (
            <div key={catalogo.id}>
                <ItemDetail data={catalogo}/>
            </div>
        ))

    )
}
export default ItemDetailContainer