import React, {useState} from 'react'

import {Header} from './Header'
import {Footer} from './Footer'
import {Discovery} from './Discovery'
import {Cart} from './Cart'
import {Category} from './Category'
import User from './User'
import Orders from './Orders'

import {OrdersProvider} from '../context/OrdersContext'

import {Switch, Route} from "react-router-dom"

export function Main() {

    const [newInCart, setNewInCart] = useState(false)
    const [activePage, setActivePage] = useState('')

    function changeActivePage(string) {
        setActivePage(string)
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
                        <Cart changeNewInCart={changeNewInCart} changeActivePage={changeActivePage} />
                    </Route>
                    <Route path="/orders">
                        <Header pageName="Órdenes" />
                        <OrdersProvider>
                            <Orders changeActivePage={changeActivePage} />
                        </OrdersProvider>
                    </Route>
                    <Route path="/usuario">
                        <User changeActivePage={changeActivePage} />
                    </Route>
                    <Route path='/categorias/:slug' render={(props) =>
                        <Category {...props} changeNewInCart={changeNewInCart} 
                            changeActivePage={changeActivePage} />
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