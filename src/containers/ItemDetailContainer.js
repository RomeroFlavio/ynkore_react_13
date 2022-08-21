import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';
import {useParams} from 'react-router-dom';

import {getDoc, getFirestore, doc} from 'firebase/firestore';
import Loading from '../components/loading';

const ItemDetailContainer = () => {
    const [load, setLoad] = useState(true);
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
            .catch(err => console.log(err))
            .finally(() => setLoad(false))
        }, 2000);
}, [id]);

    return(
        
        <div >
            { load ? <Loading/> : <ItemDetail data={productos}/> }
        </div>

    )
}
export default ItemDetailContainer