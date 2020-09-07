import React from 'react';

import {CategoryButton} from './CategoryButton';

export class Discovery extends React.Component {

    componentDidMount() {
        document.body.style.backgroundColor = '#f2f2f4';
        this.props.changeActivePage('home');
    }
  
    componentWillUnmount() {
        document.body.removeAttribute("style");
        this.props.changeActivePage('');
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

