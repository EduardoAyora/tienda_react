import React from 'react';

import {CategoryButton} from './CategoryButton';

export function Discovery(props) {
    const buttons = props.categories.map((category) => (
        <CategoryButton key={category.id} category={category} />
    ));
    return (
        <div className="discovery-container">
            {buttons}
        </div>
    )
}

