import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export function Header(props) {
    const pageName = props.pageName;
    const history = props.history;
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