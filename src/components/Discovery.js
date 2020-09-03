import React from 'react';

import {CategoryButton} from './CategoryButton';

export class Discovery extends React.Component {

    componentDidMount() {
        document.body.style.backgroundColor = '#f2f2f4';
    }
  
    componentWillUnmount() {
        document.body.removeAttribute("style");
    }
    
    render() {
        const buttons = this.props.categories.map((category) => (
            <CategoryButton key={category.id} category={category} />
        ));
        return (
            <div className="discovery-container">
                {buttons}
            </div>
        )
    }
}

