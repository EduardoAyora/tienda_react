import React from 'react';
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons'

export function Footer({newInCart}) {
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
                        <FontAwesomeIcon icon={faHome} className="fa-lg" />
                    </Link>
                </li>
                <li>
                    <Link to="/carrito">
                        <FontAwesomeIcon icon={faShoppingCart} className="fa-lg" />
                        {newInCartIcon}
                    </Link>
                </li>
                <li>
                    <Link to="/usuario">
                        <FontAwesomeIcon icon={faUserAlt} className="fa-lg" />
                    </Link>
                </li>
            </ul>
        </footer>
    );
}