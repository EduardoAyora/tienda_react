import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

export class DishItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            quantity: 1,
            isIcon: false
        }

        this.buttonMinusClick = this.buttonMinusClick.bind(this);
        this.buttonPlusClick = this.buttonPlusClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.addToCartClick = this.addToCartClick.bind(this);
    }

    buttonMinusClick() {
        let quantity = this.state.quantity;
        if(quantity > 1) {
            this.setState({
                quantity: quantity - 1
            })
        }
    }

    buttonPlusClick() {
        let quantity = this.state.quantity;
        if(quantity !== '') {
            this.setState({
                quantity: quantity + 1
            })
        } else {
            this.setState({
                quantity: 1
            })
        }
    }

    inputChange(event) {
        let value = event.target.value
        if (value !== '') {
            if(value > 0) {
                this.setState({
                    quantity: parseInt(value)
                })
            } else {
                this.setState({
                    quantity: 1
                })
            }
        }
        else {
            this.setState({
                quantity: value
            })
        }
    }

    addToCartClick() {
        const dish = this.props.dish;
        let quantity = this.state.quantity;
        const pricesArray = dish.precios;
        const addToCart = this.props.addToCart;
        if(quantity === ""){
            quantity = 1;
            this.setState({
                quantity: 1
            })
        }
        addToCart(dish.id, pricesArray[0].id, quantity);

        // renderizando icono de "nuevo en carrito"
        const changeNewInCart = this.props.changeNewInCart;
        changeNewInCart(false);
        const waitForChangeInCart = () => {
            changeNewInCart(true);
        }
        setTimeout(waitForChangeInCart, 10);

        // cambiando estado para el boton "agregar"
        this.setState({
            isIcon: true
        })
        const waitForChangeButton = () => {
            this.setState({
                isIcon: false
            })
        }
        setTimeout(waitForChangeButton, 1000);
    }

    render() {
        const dish = this.props.dish;
        const quantity = this.state.quantity;
        const pricesArray = dish.precios;

        // definiendo contenido de boton agregar
        let addToCartButtonContent = 'Agregar';
        if(this.state.isIcon === true) {
            addToCartButtonContent = (
                <FontAwesomeIcon icon={faCheck} className="fa-lg added-to-cart-icon" />
            )
        }

        const addToCartComponent = (
            <div className="dish-item-add-container dish-item-add-container-right">
                <div className="dish-item-input-group">
                    <button className="dish-item-button-minus" onClick={this.buttonMinusClick}>-</button>
                    <input type="number" value={quantity} className="dish-item-quantity-field"
                        onChange={this.inputChange} />
                    <button className="dish-item-button-plus" onClick={this.buttonPlusClick}>+</button>
                </div>
                <button className="dish-item-add-button" 
                    onClick={this.addToCartClick}>{addToCartButtonContent}</button>
            </div>
        )

        if(pricesArray.length === 1) {
            return (
                <DishItemContainer dish={dish}>
                    <div className="dish-item-price">
                        <span>{`${pricesArray[0].nombre}:`}</span>
                        <span>{`$${pricesArray[0].precio}`}</span>
                    </div>
                    
                    {addToCartComponent}
                </DishItemContainer>
            )
        }
        else if(pricesArray.length > 1) {
            return (
                <DishItemContainer dish={dish}>
                    <div className="dish-item-price-arrows-container">
                        <button type="button" className="dish-item-arrow left-item-arrow" onClick={() => console.log('s')}>
                            <FontAwesomeIcon icon={faArrowLeft} className="fa-lg" />
                        </button>
                        <div className="dish-item-price">
                            <span>{`${pricesArray[0].nombre}:`}</span>
                            <span>{`$${pricesArray[0].precio}`}</span>
                        </div>
                        <button type="button" className="dish-item-arrow right-item-arrow" onClick={() => console.log('s')}>
                            <FontAwesomeIcon icon={faArrowRight} className="fa-lg" />
                        </button>
                    </div>

                    {addToCartComponent}
                </DishItemContainer>
            )
        }
        else {
            return (
                <DishItemContainer dish={dish}></DishItemContainer>
            )
        }
    }

}

function DishItemContainer(props) {
    const dish = props.dish;
    return (
        <li className="dish-item dish-item-add">
            <div className="dish-item-image-container">
                <img src={process.env.PUBLIC_URL + dish.imagen} alt={dish.nombre} />
            </div>
            <div className="dish-item-info">
                <h4 className="dish-item-name">{dish.nombre}</h4>
                {props.children}
            </div>
        </li>
    )
}
