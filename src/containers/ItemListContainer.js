import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../components/ItemList';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
            const db = getFirestore()
            const queryProducts = collection(db, "items")

            if(categoryId){
                setTimeout(() => {
                    const collectionfilter = query(queryProducts, where('sex','==', categoryId))
                    getDocs(collectionfilter)
                    .then((resp) => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
                    .catch(err => console.log(err))
                }, 2000);
            }else{
                getDocs(queryProducts)
                    .then((resp) => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
                    .catch(err => console.log(err))
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