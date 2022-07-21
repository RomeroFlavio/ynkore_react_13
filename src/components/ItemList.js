import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item.js';

const ItemList = ({productos}) => {

    return <>

        {productos.map((catalogo) => (
            <div key={catalogo.id}>
                <Item data={catalogo}/>
            </div>
        ))}
    </>;
};
export default ItemList;