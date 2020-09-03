import React from 'react';
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
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