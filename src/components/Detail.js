import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.buttonMinusClick = this.buttonMinusClick.bind(this);
        this.buttonPlusClick = this.buttonPlusClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    buttonMinusClick() {

    }

    buttonPlusClick() {

    }

    inputChange() {

    }

    render() {
        const dish = this.props.dish;
        const cartElement = this.props.cartElement;
        const price = dish.precios.find((price) => (
            price.id === cartElement.priceId
        ));
        const priceName = price.nombre;
        const priceValue = price.precio;
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
                            <input type="number" value={cartElement.quantity} className="dish-item-quantity-field"
                                onChange={this.inputChange} />
                            <button className="dish-item-button-plus" onClick={this.buttonPlusClick}>+</button>
                        </div>
                    </div>

                    <span className="dish-item-detail-price">
                        {`$${'120.00'}`}
                    </span>
                </div>
    
                <div className="quit">
                    <button>
                        <FontAwesomeIcon icon={faTimes} className="fa-lg" />
                    </button>
                </div>
            </li>
        )
    }

    
}