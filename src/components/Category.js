import React from 'react';
import {DishItem} from './DishItem';
import {Header} from './Header';

export class Category extends React.Component {

    componentDidMount() {
        document.body.style.backgroundColor = '#f2f2f4';
        this.props.changeActivePage('home');
    }

    componentWillUnmount() {
        document.body.removeAttribute("style");
        this.props.changeActivePage('');
    }

    render() {
        const match = this.props.match;
        const history = this.props.history;
        const data = this.props.data;
        const addToCart = this.props.addToCart;
        const changeNewInCart = this.props.changeNewInCart;

        // obteniendo los productos y sus precios dentro de la categoria
        const category = data.find(({slug}) => slug === match.params.slug);
        const dishesArray = category.platos;
        const dishes = dishesArray.map((dish) => (
            <DishItem key={dish.id} dish={dish} addToCart={addToCart}
                changeNewInCart={changeNewInCart} />
        ));

        return(
            <div>
                <Header pageName={category.nombre} history={history} />
                <ul className="items-container category-container">
                    {dishes}
                </ul>
            </div>
        )
    }
}