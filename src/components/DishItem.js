import React from 'react';

export function DishItem(props) {
    const dish = props.dish;
    return (
        <li className="dish-item">
            <div className="dish-item-image-container">
                <img src={dish.imagen} alt={dish.nombre} />
            </div>
            <div className="dish-item-info">
                <h4>{dish.nombre}</h4>

            </div>
        </li>
    )
}