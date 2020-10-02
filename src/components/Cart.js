import React, {useEffect} from 'react';
import {Detail} from './Detail';

export function Cart({changeNewInCart, changeActivePage, data, inCart, addToCart, quitFromCart}) {

    useEffect(() => {
        changeNewInCart(false)
        changeActivePage('cart')
        document.body.style.backgroundColor = '#f2f2f4'

        return () => {
            changeActivePage('')
            document.body.removeAttribute("style")
        }
    }, [changeNewInCart, changeActivePage])

    let cartTotal = 0;

    // renderizamos los detalles
    const details = inCart.map((cartElement) => {
        let dish;
        // recuperamos los datos del plato con su id
        data.forEach((category) => {
            category.platos.forEach((plato) => {
                if(plato.id === cartElement.productId) {
                    dish = plato;
                }
            })
        })
        if(dish == null) {
            // codigo para cuando se haya eliminado un producto de la base,
            // y el usuario haya tenido ese producto en su carrito
        }

        // recuperamos los datos del precio con su id
        const price = dish.precios.find((price) => (
            price.id === cartElement.priceId
        ));
        const priceName = price.nombre;
        const priceValue = price.precio;
        const quantity = cartElement.quantity;
        const detailTotal = Math.round(priceValue * quantity * 100) / 100;

        // sumamos todos los detalles para obtener el total del carrito
        cartTotal += detailTotal;

        // definimos una key que combina el id del plato con el id del precio
        const key = dish.id.toString() + ',' + price.id.toString();
        return (
            <Detail key={key} priceName={priceName} dish={dish}
                priceValue={priceValue} quantity={quantity} 
                detailTotal={detailTotal} addToCart={addToCart} 
                quitFromCart={quitFromCart} cartElement={cartElement} />
        )
    })

    cartTotal = Math.round(cartTotal * 100) / 100;

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
                    <button className="cart-total-button">Finalizar Compra</button>
                </div>
            </div>
        )
    }
    
}