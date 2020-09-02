import React from 'react';

import {Header} from './Header';
import {Footer} from './Footer';
import {Discovery} from './Discovery';

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
            <div>
                <Header />
                <Discovery categories={this.state.categories} />
                <Footer />
            </div>
        )
    }
}