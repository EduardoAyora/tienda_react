import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.buttonMinusClick = this.buttonMinusClick.bind(this);
        this.buttonPlusClick = this.buttonPlusClick.bind(this);
        this.buttonQuitClick = this.buttonQuitClick.bind(this);
    }

    buttonMinusClick() {
        const cartElement = this.props.cartElement;
        // solo cuando es mayor a uno ya que no queremos tener cantidades negativas
        if(cartElement.quantity > 1) {
            this.props.addToCart(cartElement.productId, cartElement.priceId, -1);
        }
    }

    buttonPlusClick() {
        const cartElement = this.props.cartElement;
        this.props.addToCart(cartElement.productId, cartElement.priceId, 1);
    }

    buttonQuitClick() {
        const cartElement = this.props.cartElement;
        this.props.quitFromCart(cartElement.productId, cartElement.priceId);
    }

    render() {
        const dish = this.props.dish;
        const cartElement = this.props.cartElement;
        const price = dish.precios.find((price) => (
            price.id === cartElement.priceId
        ));
        const priceName = price.nombre;
        const priceValue = price.precio;
        const quantity = cartElement.quantity;
        const detailTotal = Math.round(priceValue * quantity * 100) / 100;
        return(
            <li className="dish-item dish-item-detail">
                <div className="dish-item-image-container">
                    <img src={process.env.PUBLIC_URL + dish.imagen} alt={dish.nombre} />
                </div>
    
                <div className="dish-item-info">
                    <h4 className="dish-item-name">{dish.nombre}</h4>
                    <div className="dish-item-price">
                        <span>{`${priceName}:`}</span>
                        <span>{`$${priceValue}`}</span>
                    </div>

                    <div className="dish-item-add-container dish-item-add-container-left">
                        <div className="dish-item-input-group">
                            <button className="dish-item-button-minus" onClick={this.buttonMinusClick}>-</button>
                            <span className="dish-item-quantity-text-container">
                                <span className="dish-item-quantity-text">{quantity}</span>
                            </span>
                            <button className="dish-item-button-plus" onClick={this.buttonPlusClick}>+</button>
                        </div>
                    </div>

                    <span className="dish-item-detail-price">
                        {`$${detailTotal}`}
                    </span>
                </div>
    
                <div className="quit">
                    <button onClick={this.buttonQuitClick}>
                        <FontAwesomeIcon icon={faTimes} className="fa-lg" />
                    </button>
                </div>
            </li>
        )
    }

    
}