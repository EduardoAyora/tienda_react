import React from 'react';
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons'

export function Footer({newInCart, activePage}) {
    // agregando clase para ver un color en el icono de pagina activa 
    let homeClassName = 'fa-lg';
    let cartClassName = 'fa-lg';
    let userClassName = 'fa-lg';
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
                    <Link to="/usuario">
                        <FontAwesomeIcon icon={faUserAlt} className={userClassName} />
                    </Link>
                </li>
            </ul>
        </footer>
    );
}