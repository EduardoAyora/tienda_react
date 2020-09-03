import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {DishItem} from './DishItem';

import {categorias} from "../json/categorias";
import {platos} from '../json/platos';

export function Category({match}) {
    //hook equivalente a DidMount y WillUnmount
    useEffect(() => {
        document.body.style.backgroundColor = '#f2f2f4';
        return function cleanup() {
            document.body.removeAttribute("style");
        };
    });
    const categoryID = categorias.find(({ slug }) => slug === match.params.slug).id;
    const dishesArray = platos.filter(({id_categoria}) => id_categoria === categoryID)
    const dishes = dishesArray.map((dish) => (
        <DishItem key={dish.id} dish={dish} />
    ));
    return(
        <div className="category-container">
            {dishes}
        </div>
    )
}