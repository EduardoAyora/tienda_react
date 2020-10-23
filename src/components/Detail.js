import React from 'react'
import {useCart} from '../context/CartContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export function Detail({dish, priceName, priceValue, quantity, detailTotal, cartElement}) {

    const addToCart = useCart().addToCart
    const quitFromCart = useCart().quitFromCart

    function buttonMinusClick() {
        // solo cuando es mayor a uno ya que no queremos tener cantidades negativas
        if(cartElement.quantity > 1) {
            addToCart(cartElement.product, cartElement.priceId, -1)
        }
    }

    function buttonPlusClick() {
        addToCart(cartElement.product, cartElement.priceId, 1)
    }

    function buttonQuitClick() {
        quitFromCart(cartElement.product, cartElement.priceId)
    }

    return(
        <li className="dish-item dish-item-detail">
            <div className="dish-item-image-container">
                <img src={process.env.PUBLIC_URL + dish.image_url} alt={dish.name} />
            </div>

            <div className="dish-item-info">
                <h4 className="dish-item-name">{dish.name}</h4>
                <div className="dish-item-price">
                    <span>{`${priceName}:`}</span>
                    <span>{`$${priceValue}`}</span>
                </div>

                <div className="dish-item-add-container dish-item-add-container-left">
                    <div className="dish-item-input-group">
                        <button className="dish-item-button-minus" onClick={buttonMinusClick}>-</button>
                        <span className="dish-item-quantity-text-container">
                            <span className="dish-item-quantity-text">{quantity}</span>
                        </span>
                        <button className="dish-item-button-plus" onClick={buttonPlusClick}>+</button>
                    </div>
                </div>

                <span className="dish-item-detail-price">
                    {`$${detailTotal.toFixed(2)}`}
                </span>
            </div>

            <div className="quit">
                <button onClick={buttonQuitClick}>
                    <FontAwesomeIcon icon={faTimes} className="fa-lg" />
                </button>
            </div>
        </li>
    )

}