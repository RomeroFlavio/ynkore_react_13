import {useState} from "react";

function ItemCount({stock, initial, onAdd}) {

    const [count, setCount] = useState(initial)

    const aumentar = () => {
        count < stock ? setCount(count + 1) : alert("Solo quedan: " + stock)
    }

    const disminuir = () => {
        count > initial ? setCount(count - 1) : alert("Compra minima: " + initial)
    }

    return (
        
        <>
            <button type="button" className="btn btn-dark" onClick={disminuir}>-</button>
            {count}
            <button type="button" className="btn btn-dark" onClick={aumentar}>+</button><br></br>
            <button type="button" className="btn btn-dark" onClick={() => onAdd(count) }>Agregar al carrito</button>
        </>

    );
  }
export default ItemCount;