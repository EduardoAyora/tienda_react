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

import {data} from "../json/data";

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data,
        }
    }

    render() {
        return(
            <Router basename={'/tienda_react_build'}>
                <div className="main-container">
                    <Switch>
                        <Route path="/carrito">
                            <Cart />
                        </Route>
                        <Route path="/usuario">
                            <User />
                        </Route>
                        <Route path='/categorias/:slug' render={(props) =>
                            <Category {...props} data={this.state.data} />
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