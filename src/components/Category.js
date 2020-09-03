import React, {useEffect} from 'react';
import {DishItem} from './DishItem';
import {Header} from './Header';

import {categorias} from "../json/categorias";
import {platos} from '../json/platos';

export function Category({match, history}) {
    //hook equivalente a DidMount y WillUnmount
    useEffect(() => {
        document.body.style.backgroundColor = '#f2f2f4';
        return function cleanup() {
            document.body.removeAttribute("style");
        };
    });
    const category = categorias.find(({ slug }) => slug === match.params.slug);
    const categoryID = category.id;
    const dishesArray = platos.filter(({id_categoria}) => id_categoria === categoryID)
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