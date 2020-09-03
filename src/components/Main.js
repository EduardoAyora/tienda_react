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

import {categorias} from '../json/categorias';
// import {precios} from '../json/precios';

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: categorias,
        }
    }

    render() {
        return(
            <Router>
                {/* el main-container solo en los 
                que tienen footer */}
                <div className="main-container">
                    <Switch>
                        <Route path="/carrito">
                            <Cart />
                        </Route>
                        <Route path="/usuario">
                            <User />
                        </Route>
                        <Route path='/categorias/:slug' render={(props) =>
                            <Category {...props} />
                        } />
                        <Route path="/">
                            <Header pageName="Categorías" isChildPage={false} />
                            <Discovery categories={this.state.categories} />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        )
    }
}