import React from 'react';
import {Link} from "react-router-dom";

export function CategoryButton(props) {
    const category = props.category
    return(
        <Link to={`/categorias/${category.slug}`} className="category-link">
            <img src={category.imagen} className="category-image" />
            <div className="category-description-container">
                <span>{category.nombre}</span>
            </div>
        </Link>
    )
}