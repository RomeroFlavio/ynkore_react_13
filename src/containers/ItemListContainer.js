import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../components/ItemList';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        
        if(categoryId){
            setTimeout(() => {
                fetch('/productos.json')
                .then((res) => res.json())
                .then((json) => setProductos(json.filter(prod => prod.sex === categoryId)))
            }, 2000);
        }else{
            fetch('/productos.json')
                .then((res) => res.json())
                .then((json) => setProductos(json))
        }

    }, [categoryId]);

    return (
        <div className="itemCount">
            {props.saludo}

            <div className='d-flex flex-row flex-wrap'>
                <ItemList productos={productos}/>
            </div>
        </div>
    )
}
export default ItemListContainer