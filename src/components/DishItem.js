import React, {useState, useRef, useEffect} from 'react'
import {useCart} from '../context/CartContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

export function DishItem({product, changeNewInCart}) {

    const timeoutButtonId = useRef()
    const timeoutCartId = useRef()

    const addToCart = useCart().addToCart
    const [quantity, setQuantity] = useState(1)
    const [isIcon, setIsIcon] = useState(false)
    const [priceCounter, setPriceCounter] = useState(0)

    const pricesArray = product.prices
    
    useEffect(() => {
        // quitando listeners al desmontar
        return () => {
            clearTimeout(timeoutCartId.current)
            clearTimeout(timeoutButtonId.current)
        }
    }, [])

    function buttonMinusClick() {
        if(quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    function buttonPlusClick() {
        if(quantity !== '') {
            setQuantity(prevQuantity => prevQuantity + 1)
        } else {
            setQuantity(1)
        }
    }

    function inputChange(event) {
        let value = event.target.value
        if (value !== '') {
            if(value > 0) {
                setQuantity(parseInt(value))
            } else {
                setQuantity(1)
            }
        }
        else {
            setQuantity(value)
        }
    }

    function addToCartClick() {
        let tempQuantity = quantity
        if(tempQuantity === ""){
            tempQuantity = 1
            setQuantity(tempQuantity)
        }
        addToCart(product, pricesArray[priceCounter]._id, tempQuantity);

        // indicador de nuevo elemento en carrito
        changeNewInCart(false)
        const waitForChangeInCart = () => {
            changeNewInCart(true)
        }
        // guardando id del timeout para quitar listener si el componente se desmonta
        timeoutCartId.current = setTimeout(waitForChangeInCart, 10)

        // indicador de agregado en el boton
        setIsIcon(true)
        const waitForChangeButton = () => {
            setIsIcon(false)
        }
        // guardando id del timeout para quitar listener si el componente se desmonta
        timeoutButtonId.current = setTimeout(waitForChangeButton, 1000)
    }

    function buttonRightArrowClick() {
        if(priceCounter < (pricesArray.length - 1)) {
            setPriceCounter(
                prevPriceCounter => prevPriceCounter + 1
            )
        }
        else {
            setPriceCounter(0)
        }
    }

    function buttonLeftArrowClick() {
        if(priceCounter > 0) {
            setPriceCounter(
                prevPriceCounter => prevPriceCounter - 1
            )
        }
        else {
            setPriceCounter(pricesArray.length - 1)
        }
    }

    // definiendo contenido de boton agregar
    let addToCartButtonContent = 'Agregar';
    if(isIcon === true) {
        addToCartButtonContent = (
            <FontAwesomeIcon icon={faCheck} className="fa-lg added-to-cart-icon" />
        )
    }

    // renderizado de grupo para modificar cantidad y boton de agregar
    const addToCartComponent = (
        <div className="dish-item-add-container dish-item-add-container-right">
            <div className="dish-item-input-group">
                <button className="dish-item-button-minus" onClick={buttonMinusClick}>-</button>
                <input type="number" value={quantity} className="dish-item-quantity-field"
                    onChange={inputChange} />
                <button className="dish-item-button-plus" onClick={buttonPlusClick}>+</button>
            </div>
            <button className="dish-item-add-button" 
                onClick={addToCartClick}>{addToCartButtonContent}</button>
        </div>
    )

    // definiendo si renderizar el precio unico o incluir flechas para distintos precios
    if(pricesArray.length === 1) {
        return (
            <DishItemContainer product={product}>
                <div className="dish-item-price">
                    <span>{`${pricesArray[0].description}:`}</span>
                    <span>{`$${pricesArray[0].value}`}</span>
                </div>
                
                {addToCartComponent}
            </DishItemContainer>
        )
    }
    else if(pricesArray.length > 1) {
        const price = pricesArray[priceCounter];
        return (
            <DishItemContainer product={product}>
                <div className="dish-item-price-arrows-container">
                    <button type="button" className="dish-item-arrow left-item-arrow" onClick={buttonLeftArrowClick}>
                        <FontAwesomeIcon icon={faArrowLeft} className="fa-lg" />
                    </button>
                    <div className="dish-item-price">
                        <span>{`${price.description}:`}</span>
                        <span>{`$${price.value}`}</span>
                    </div>
                    <button type="button" className="dish-item-arrow right-item-arrow" onClick={buttonRightArrowClick}>
                        <FontAwesomeIcon icon={faArrowRight} className="fa-lg" />
                    </button>
                </div>

                {addToCartComponent}
            </DishItemContainer>
        )
    }
    else {
        return (
            <DishItemContainer product={product}></DishItemContainer>
        )
    }

}

// Contenedor del DishItem
function DishItemContainer({product, children}) {
    return (
        <li className="dish-item dish-item-add">
            <div className="dish-item-image-container">
                <img src={process.env.PUBLIC_URL + product.image_url} alt={product.name} />
            </div>
            <div className="dish-item-info">
                <h4 className="dish-item-name">{product.name}</h4>
                {children}
            </div>
        </li>
    )
}
