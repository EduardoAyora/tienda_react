import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export function DishItem({dish}) {
    const pricesArray = dish.precios;
    if(pricesArray.length === 1) {
        return (
            <li className="dish-item">
                <div className="dish-item-image-container">
                    <img src={dish.imagen} alt={dish.nombre} />
                </div>
                <div className="dish-item-info">
                    <h4 className="dish-item-name">{dish.nombre}</h4>
                    <p>{dish.price}</p>
                </div>
            </li>
        )
    }
    else if(pricesArray.length > 1) {
        return (
            <li className="dish-item">

                <button type="button" className="dish-item-arrow left-item-arrow" onClick={() => console.log('s')}>
                    <FontAwesomeIcon icon={faArrowLeft} className="fa-lg" />
                </button>

                <div className="dish-item-image-container">
                    <img src={dish.imagen} alt={dish.nombre} />
                </div>
                <div className="dish-item-info">
                    <h4 className="dish-item-name">{dish.nombre}</h4>
                    <p>{dish.price}</p>
                </div>

                <button type="button" className="dish-item-arrow right-item-arrow" onClick={() => console.log('s')}>
                    <FontAwesomeIcon icon={faArrowRight} className="fa-lg" />
                </button>

            </li>
        )
    }
    else {
        return (
            <li className="dish-item">
                <div className="dish-item-image-container">
                    <img src={dish.imagen} alt={dish.nombre} />
                </div>
                <div className="dish-item-info">
                    <h4 className="dish-item-name">{dish.nombre}</h4>
                </div>
            </li>
        )
    }
    
}