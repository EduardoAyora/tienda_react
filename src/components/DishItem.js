import React from 'react';

export function DishItem(props) {
    const dish = props.dish;
    return (
        <div className="dish-item">
            <img src={dish.imagen} />
            <div className="dish-item-info">
                <h4>{dish.nombre}</h4>
                <p>{dish.description}</p>
            </div>
        </div>
    )
}