import React from 'react';

import {Header} from './Header';
import {Footer} from './Footer';
import {Discovery} from './Discovery';
import {Cart} from './Cart';
import {User} from './User';
import {Category} from './Category';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import data from "../json/data";
import inCart from "../json/inCart";

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data,
            inCart: inCart
        }
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(addedProductId, addedPriceId, quantity) {
        const inCart = this.state.inCart;
        const index = inCart.findIndex((elementInCart) => (
            (elementInCart.productId === addedProductId) && (elementInCart.priceId === addedPriceId)
        ));
        if(index === -1) {
            console.log('nuevo')
            this.setState({
                inCart: [
                    ...inCart,
                    {
                        productId: addedProductId,
                        priceId: addedPriceId,
                        quantity: quantity
                    }
                ]
            })
        }
        else {
            const newInCart = [...inCart];
            newInCart[index] = {
                productId: addedProductId,
                priceId: addedPriceId,
                quantity: quantity + inCart[index].quantity
            };
            this.setState({
                inCart: newInCart
            })
        }
    }

    render() {
        return(
            <Router basename={'/tienda_react'}>
                <div className="main-container">
                    <Switch>
                        <Route path="/carrito">
                            <Cart />
                        </Route>
                        <Route path="/usuario">
                            <User />
                        </Route>
                        <Route path='/categorias/:slug' render={(props) =>
                            <Category {...props} data={this.state.data} addToCart={this.addToCart} />
                        } />
                        <Route path="/">
                            <Header pageName="Categorías" />
                            <Discovery categories={this.state.data} />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        )
    }
}