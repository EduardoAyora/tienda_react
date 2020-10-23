import React from 'react';
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingCart, faUserAlt, faClipboardList } from '@fortawesome/free-solid-svg-icons'

export function Footer({newInCart, activePage}) {
    // agregando clase para ver un color en el icono de pagina activa 
    const FA_LARGE = 'fa-lg'
    let homeClassName = FA_LARGE
    let cartClassName = FA_LARGE
    let userClassName = FA_LARGE
    let ordersClassName = FA_LARGE
    switch(activePage) {
        case 'home':
            homeClassName += ' active-footer-icon';
            break;
        case 'cart':
            cartClassName += ' active-footer-icon';
            break;
        case 'user':
            userClassName += ' active-footer-icon';
            break;
        case 'orders':
            ordersClassName += ' active-footer-icon';
            break;
        default:
    }

    let newInCartIcon;
    if(newInCart === true) {
        newInCartIcon = (
            <span className="new-in-cart-icon-container">
                <span className="new-in-cart-icon"></span>          
            </span>
        )
    }
    return (
        <footer>
            <ul className="footer-links">
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} className={homeClassName} />
                    </Link>
                </li>
                <li>
                    <Link to="/carrito">
                        <FontAwesomeIcon icon={faShoppingCart} className={cartClassName} />
                        {newInCartIcon}
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <FontAwesomeIcon icon={faClipboardList} className={ordersClassName} />
                    </Link>
                </li>
                <li>
                    <Link to="/usuario">
                        <FontAwesomeIcon icon={faUserAlt} className={userClassName} />
                    </Link>
                </li>
            </ul>
        </footer>
    );
}