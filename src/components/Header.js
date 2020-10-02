import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export function Header({pageName, history}) {
    let arrow;
    if(history) {
        arrow = (
            <button type="button" className="header-button" onClick={() => history.goBack()}>
                <FontAwesomeIcon icon={faArrowLeft} className="fa-lg" />
            </button>
        )
    }
    return (
        <header>
            {arrow}
            <span className="header-title">{pageName}</span>
        </header>
    );
}