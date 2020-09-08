import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

export class DishItem extends React.Component {

    // guarda el id del temporizador para cancelar si se desmonta el componente
    _timeoutId;

    constructor(props) {
        super(props);

        this.state = {
            quantity: 1,
            isIcon: false,
            priceCounter: 0
        }

        this.buttonMinusClick = this.buttonMinusClick.bind(this);
        this.buttonPlusClick = this.buttonPlusClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.addToCartClick = this.addToCartClick.bind(this);
        this.buttonLeftArrowClick = this.buttonLeftArrowClick.bind(this);
        this.buttonRightArrowClick = this.buttonRightArrowClick.bind(this);
    }

    componentWillUnmount() {
        // quita el temporizador
        clearTimeout(this._timeoutId);
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
        const priceCounter = this.state.priceCounter;
        if(quantity === ""){
            quantity = 1;
            this.setState({
                quantity: 1
            })
        }
        addToCart(dish.id, pricesArray[priceCounter].id, quantity);

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
        // guardando id del timeout para cancelar si el componente se desmonta antes del tiempo
        this._timeoutId = setTimeout(waitForChangeButton, 1000);
    }

    buttonRightArrowClick() {
        const pricesArray = this.props.dish.precios;
        const priceCounter = this.state.priceCounter;
        if(priceCounter < (pricesArray.length - 1)) {
            this.setState({
                priceCounter: priceCounter + 1
            })
        }
        else {
            this.setState({
                priceCounter: 0
            })
        }
    }

    buttonLeftArrowClick() {
        const pricesArray = this.props.dish.precios;
        const priceCounter = this.state.priceCounter;
        if(priceCounter > 0) {
            this.setState({
                priceCounter: priceCounter - 1
            })
        }
        else {
            this.setState({
                priceCounter: pricesArray.length - 1
            })
        }
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
            const priceCounter = this.state.priceCounter;
            const price = pricesArray[priceCounter];
            return (
                <DishItemContainer dish={dish}>
                    <div className="dish-item-price-arrows-container">
                        <button type="button" className="dish-item-arrow left-item-arrow" onClick={this.buttonLeftArrowClick}>
                            <FontAwesomeIcon icon={faArrowLeft} className="fa-lg" />
                        </button>
                        <div className="dish-item-price">
                            <span>{`${price.nombre}:`}</span>
                            <span>{`$${price.precio}`}</span>
                        </div>
                        <button type="button" className="dish-item-arrow right-item-arrow" onClick={this.buttonRightArrowClick}>
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
