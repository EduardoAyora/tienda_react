import React, {useState} from 'react';

import {Header} from './Header';
import {Footer} from './Footer';
import {Discovery} from './Discovery';
import {Cart} from './Cart';
import {User} from './User';
import {Category} from './Category';

import {Switch, Route} from "react-router-dom";

import inCartJson from "../json/inCart";

export function Main() {

    const [inCart, setInCart] = useState(inCartJson)
    const [newInCart, setNewInCart] = useState(false)
    const [activePage, setActivePage] = useState('')

    function changeActivePage(string) {
        setActivePage(string)
    }

    function addToCart(addedProductId, addedPriceId, quantity) {
        const index = inCart.findIndex((elementInCart) => (
            (elementInCart.productId === addedProductId) && (elementInCart.priceId === addedPriceId)
        ));
        if(index === -1) {
            setInCart(
                prevInCart => [
                    ...prevInCart,
                    {
                        productId: addedProductId,
                        priceId: addedPriceId,
                        quantity: quantity
                    }
                ]
            )
        }
        else {
            const newInCart = [...inCart];
            newInCart[index] = {
                productId: addedProductId,
                priceId: addedPriceId,
                quantity: quantity + inCart[index].quantity
            };
            setInCart(newInCart)
        }
    }

    function quitFromCart(removedProductId, removedPriceId) {
        const newInCart = inCart.filter(elementInCart => (
            (elementInCart.productId !== removedProductId) || (elementInCart.priceId !== removedPriceId)
        ))
        setInCart(newInCart)
    }

    function changeNewInCart(boolean) {
        setNewInCart(boolean)
    }

    return(
        <>
            <div className="main-container">
                <Switch>
                    <Route path="/carrito">
                        <Header pageName="Carrito" />
                        <Cart inCart={inCart}
                            addToCart={addToCart} quitFromCart={quitFromCart}
                            changeNewInCart={changeNewInCart} changeActivePage={changeActivePage} />
                    </Route>
                    <Route path="/usuario">
                        <User changeActivePage={changeActivePage} />
                    </Route>
                    <Route path='/categorias/:slug' render={(props) =>
                        <Category {...props} addToCart={addToCart}
                            changeNewInCart={changeNewInCart} changeActivePage={changeActivePage} />
                    } />
                    <Route path="/">
                        <Header pageName="Categorías" />
                        <Discovery changeActivePage={changeActivePage} />
                    </Route>
                </Switch>
            </div>
            <Footer newInCart={newInCart} activePage={activePage} />
        </>
    )

}