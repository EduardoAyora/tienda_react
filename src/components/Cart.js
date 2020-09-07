import React, {useEffect} from 'react';
import {Detail} from './Detail';

export function Cart({data, inCart}) {
    const details = inCart.map((cartElement) => {
        let product;
        data.forEach((category) => {
            category.platos.forEach((plato) => {
                if(plato.id === cartElement.productId) {
                    product = plato;
                }
            })
        })
        if(product === undefined) {
            // codigo para cuando se haya eliminado un producto de la base,
            // y el usuario haya tenido ese producto en su carrito
        }
        return (
            <Detail key={product.id} dish={product} cartElement={cartElement} />
        )
    })

    useEffect(() => {
        document.body.style.backgroundColor = '#f2f2f4';
        return function cleanup() {
            document.body.removeAttribute("style");
        };
    });

    return (
        <ul className="items-container cart-container">
            {details}
        </ul>
    )
}