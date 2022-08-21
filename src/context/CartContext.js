import { createContext, useContext, useState } from 'react';
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';

    
const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ( {children} ) => {

    const [cartList, setCartList] = useState([])
    const [count, setCount] = useState(0)
    
    const addToCart = (objProducto) =>{
        if(cartList.length === 0){
            setCartList([
                ...cartList,
                objProducto
            ]);
            setCount(objProducto.cantidad)
        }else{
            inCart(objProducto);
        }
    };
    
    const inCart = (comparar) => {
        let producto = cartList.find(prod => prod.id === comparar.id)
        if(producto !== undefined){

            const productoIndex = cartList.indexOf(producto)
            !producto ? setCartList([...cartList, comparar]) : cartList[productoIndex].cantidad += comparar.cantidad
            setCount(count + comparar.cantidad)
            return -1;
        }

        setCartList([
            ...cartList,
            comparar
        ])
        setCount(count + comparar.cantidad)
    };

    const removeItem = (quit) => {
        let index = cartList.findIndex(product => product === quit);
        if(index !== -1){
            cartList.splice(index,1);
            setCartList([
                ...cartList
            ]);
            setCount(count - quit.cantidad)
        }
    }

    const costo = () => {
        let acumulador = 0;
        cartList.forEach(prod => {
            acumulador += (prod.precio * prod.cantidad);
        });
        return acumulador;
    }
    
    const vaciarCarrito = () =>{
        setCartList([])
    }

    const addData = (datos) => {
        const orden = {
            name: datos.nombre,
            phone: datos.telefono,
            email: datos.email,
            email2: datos.verificarEmail,
        }
        orden.email === orden.email2 ? generarOrden(orden) : alert("El email no coincide")
    }

    const generarOrden = async (orden) => {
        
        const order = {}
        order.buyer = {name: orden.name, phone: orden.phone, email: orden.email}
        order.items = cartList.map(product => {
            return{
                id: product.id,
                name: product.nombre,
                price: product.precio,
                units: product.cantidad,
            }
        })
        order.total = costo()

        const db = getFirestore()
        const queryOrders = collection(db, "orders")
        addDoc(queryOrders, order)
        .then(resp => alert(`El pedido se registro correctramente, ORDEN: ${resp.id}`))

        const queryCollectionStock = collection(db, "items")

        const queryUploadStock = query(
            queryCollectionStock,
            where(documentId(), 'in', cartList.map(it => it.id))
        )

        const batch = writeBatch(db)
        
        await getDocs(queryUploadStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(Item => Item.id === res.id).cantidad
        })))
        .catch(err => console.log(err))
        .finally(() => vaciarCarrito())

        batch.commit()
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            removeItem,
            count,
            costo,
            generarOrden,
            addData,
        }}>
            {children} 
        </CartContext.Provider>
    )
}

export default CartContextProvider