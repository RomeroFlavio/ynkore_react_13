import { useCartContext } from "../context/CartContext"



function Cart() {

    const { cartList, vaciarCarrito} = useCartContext()

    return (
        <>
           
        <div>
            { cartList.map(data =>
              <div className=" d-flex flex-row bg-secondary m-1">
                  <img src={`../${data.url}`} className="card-img-top imgMedida" alt="img"/>
                  <h2 className="card-title">{data.nombre}</h2>
                  <p className="card-text">Precio: ${data.precio}</p>
                  <p className="card-text">Cantidad: {data.cantidad}</p>
              </div>
            )}
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
            
        </>
      )
    }

export default Cart