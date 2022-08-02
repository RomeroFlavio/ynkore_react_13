import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';
import {useParams} from 'react-router-dom';

import {getDoc, getFirestore, doc} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            
            const db = getFirestore()
            const queryProducts = doc(db, "items", id)
            resolve(getDoc(queryProducts))
            reject("not")
        })
        setTimeout(() => {
            
            getItem.then(resp => setProductos({id: resp.id, ...resp.data()}))
        }, 2000);
}, [id]);

    return(
        
        <div >
            <ItemDetail data={productos}/>
        </div>

    )
}
export default ItemDetailContainer