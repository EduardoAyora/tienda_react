import React, {useEffect} from 'react';
import {DishItem} from './DishItem';
import {Header} from './Header';

export function Category({match, history, data}) {
    // hook equivalente a DidMount y WillUnmount
    useEffect(() => {
        document.body.style.backgroundColor = '#f2f2f4';
        return function cleanup() {
            document.body.removeAttribute("style");
        };
    });

    // obteniendo los productos y sus precios dentro de la categoria
    const category = data.find(({slug}) => slug === match.params.slug);
    const dishesArray = category.platos;
    const dishes = dishesArray.map((dish) => (
        <DishItem key={dish.id} dish={dish} />
    ));

    return(
        <div>
            <Header pageName={category.nombre} history={history} />
            <ul className="category-container">
                {dishes}
            </ul>
        </div>
    )
}