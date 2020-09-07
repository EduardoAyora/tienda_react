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
            inCart: inCart,
            newInCart: false,
            activePage: ''
        }
        this.addToCart = this.addToCart.bind(this);
        this.quitFromCart = this.quitFromCart.bind(this);
        this.changeNewInCart = this.changeNewInCart.bind(this);
        this.changeActivePage = this.changeActivePage.bind(this);
    }

    changeActivePage(string) {
        this.setState({
            activePage: string
        })
    }

    addToCart(addedProductId, addedPriceId, quantity) {
        const inCart = this.state.inCart;
        const index = inCart.findIndex((elementInCart) => (
            (elementInCart.productId === addedProductId) && (elementInCart.priceId === addedPriceId)
        ));
        if(index === -1) {
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

    quitFromCart(removedProductId, removedPriceId) {
        const inCart = this.state.inCart;
        const newInCart = inCart.filter(elementInCart => (
            (elementInCart.productId !== removedProductId) || (elementInCart.priceId !== removedPriceId)
        ))
        this.setState({
            inCart: newInCart
        })
    }

    changeNewInCart(boolean) {
        this.setState({
            newInCart: boolean
        })
    }

    render() {
        return(
            <Router basename={'/tienda_react'}>
                <div className="main-container">
                    <Switch>
                        <Route path="/carrito">
                            <Header pageName="Carrito" />
                            <Cart data={this.state.data} inCart={this.state.inCart}
                                addToCart={this.addToCart} quitFromCart={this.quitFromCart}
                                changeNewInCart={this.changeNewInCart} changeActivePage={this.changeActivePage} />
                        </Route>
                        <Route path="/usuario">
                            <User changeActivePage={this.changeActivePage} />
                        </Route>
                        <Route path='/categorias/:slug' render={(props) =>
                            <Category {...props} data={this.state.data} addToCart={this.addToCart}
                                changeNewInCart={this.changeNewInCart} changeActivePage={this.changeActivePage} />
                        } />
                        <Route path="/">
                            <Header pageName="Categorías" />
                            <Discovery categories={this.state.data} changeActivePage={this.changeActivePage} />
                        </Route>
                    </Switch>
                </div>
                <Footer newInCart={this.state.newInCart} activePage={this.state.activePage} />
            </Router>
        )
    }
}