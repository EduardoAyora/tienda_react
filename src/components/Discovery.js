import React, {useEffect} from 'react';

import {CategoryButton} from './CategoryButton';

export function Discovery({changeActivePage, categories}) {

    useEffect(() => {
        document.body.style.backgroundColor = '#f2f2f4'
        changeActivePage('home')

        return(() => {
            document.body.removeAttribute("style");
            changeActivePage('');
        })
    }, [changeActivePage])

    const buttons = categories.map((category) => (
        <CategoryButton key={category.id} category={category} />
    ));
    return (
        <div className="discovery-container">
            {buttons}
        </div>
    )
    
}

