import React, {useEffect} from 'react'
import {Detail} from './Detail'
import axios from 'axios'
import {useCart} from '../context/CartContext'

export function Cart({changeNewInCart, changeActivePage}) {

    const cart = useCart().cart

    useEffect(() => {
        changeNewInCart(false)
        changeActivePage('cart')
        document.body.style.backgroundColor = '#f2f2f4'

        return () => {
            changeActivePage('')
            document.body.removeAttribute("style")
        }
    }, [changeNewInCart, changeActivePage])

    function handlePurchase() {
        axios.post('http://localhost:1100/orders', {
            // tableNumber: 3
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err.response.data.message)
        })

        // axios.get('http://localhost:1100/orders').then(res => {
        //     console.log(res.data)
        // })
    }

    let cartTotal = 0;

    // renderizamos los detalles
    const details = cart.map((cartElement) => {
        let dish = cartElement.product

        // recuperamos los datos del plato con su id
        // esto vamos a cambiar por local storage
        // categories.forEach((category) => {
        //     category.products.forEach((plato) => {
        //         if(plato._id === cartElement.productId) {
        //             dish = plato;
        //         }
        //     })
        // })

        // recuperamos los datos del precio con su id
        const price = dish.prices.find((price) => (
            price._id === cartElement.priceId
        ));
        
        const priceName = price.description;
        const priceValue = price.value;
        const quantity = cartElement.quantity;
        const detailTotal = Math.round(priceValue * quantity * 100) / 100;

        // sumamos todos los detalles para obtener el total del carrito
        cartTotal += detailTotal;

        // definimos una key que combina el id del plato con el id del precio
        const key = dish._id.toString() + ',' + price._id.toString();
        return (
            <Detail key={key} priceName={priceName} dish={dish}
                priceValue={priceValue} quantity={quantity} 
                detailTotal={detailTotal} cartElement={cartElement} />
        )
    })

    cartTotal = Math.round(cartTotal * 100) / 100

    if(details.length === 0) {
        return (
            <div className="empty-cart">
                El carrito está vacío
            </div>
        )
    }
    else {
        return (
            <div>
                <ul className="items-container cart-container">
                    {details}
                </ul>
                <div className="cart-total-container">
                    <div className="cart-total">Total: ${cartTotal}</div>
                    <button onClick={handlePurchase} className="cart-total-button">Finalizar Compra</button>
                </div>
            </div>
        )
    }
    
}