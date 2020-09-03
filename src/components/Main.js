import React from 'react';

import {Header} from './Header';
import {Footer} from './Footer';
import {Discovery} from './Discovery';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import {categorias} from '../json/categorias';
// import {platos} from '../json/platos';
// import {precios} from '../json/precios';

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: categorias,
            // dishes: platos,
            // prices: precios
        }
    }

    render() {
        return(
            <Router>
                <Header />
                <div className="main-container">
                    <Switch>
                        <Route path="/">
                            <Discovery categories={this.state.categories} />
                        </Route>
                        <Route path="/carrito">
                            <Discovery categories={this.state.categories} />
                        </Route>
                        <Route path="/usuario">
                            <Discovery categories={this.state.categories} />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        )
    }
}