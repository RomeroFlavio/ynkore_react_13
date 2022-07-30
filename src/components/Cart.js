import { useCartContext } from "../context/CartContext"
import {Link} from 'react-router-dom';

function Cart() {

    const { cartList, vaciarCarrito, removeItem, costo} = useCartContext()

    return (
        <>
           <div>
                {cartList.map(data =>
                  <div key={data.id} className=" d-flex flex-row bg-secondary m-1 justify-content-around align-items-center">
                      <img src={`../${data.url}`} className="imgMedida" alt="img"/>
                      <h2 className="card-title">{data.nombre}</h2>
                      <p className="card-text">Precio: ${data.precio}</p>
                      <p className="card-text">Cantidad: {data.cantidad}</p>
                      <p className="card-text">${data.cantidad * data.precio}</p>
                      <button onClick={() => removeItem(data)}>Eliminar</button>              
                  </div>
              )}
              <div>
              {costo() !== 0 ? <p className="card-text">{`Precio total: $${costo()}`}</p> : <h3>Todavia no cuenta con productos en el carrito</h3>}
              {cartList.length !== 0 ? <button onClick={vaciarCarrito}>Vaciar carrito</button> : <Link type="button" className="btn btn-dark" to='/'>Seguir comprando</Link>}

              </div>
          </div>
            
        </>
      )
    }

export default Cart