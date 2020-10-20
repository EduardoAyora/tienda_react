import React from 'react';
import {Link} from "react-router-dom";

export function CategoryButton(props) {
    const category = props.category 
    return(
        <Link to={`/categorias/${category.slug}`} className="category-link">
            <img src={process.env.PUBLIC_URL + category.image_url} className="category-image" alt={category.nombre} />
            <div className="category-description-container">
                <span>{category.name}</span>
            </div>
        </Link>
    )
}