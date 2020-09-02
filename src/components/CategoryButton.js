import React from 'react';

export function CategoryButton(props) {
    const category = props.category
    return(
        <button className="category-button">
            <img src={category.imagen} className="category-image" />
            <div className="category-description-container">
                <span>{category.nombre}</span>
            </div>
        </button>
    )
}