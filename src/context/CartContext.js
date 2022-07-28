import { createContext, useContext, useState } from 'react';
    
const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ( {children} ) => {

    const [cartList, setCartList] = useState([])
    
    const addToCart = (objProducto) =>{
        if(cartList.length === 0){
            setCartList([
                ...cartList,
                objProducto
            ]);
        }else{
            InCart(objProducto);
        }
    };
    
    const InCart = (comparar) => {
        let producto = cartList.find(prod => prod.id === comparar.id)
        if(producto !== undefined){
            alert(`Ya adquirio ${comparar.nombre}.`);
            return -1;
        }

        setCartList([
            ...cartList,
            comparar
        ])
    };
    
    const vaciarCarrito = () =>{
        setCartList([])
    }
    
    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito
        }}>
            {children} 
        </CartContext.Provider>
    )
}

export default CartContextProvider