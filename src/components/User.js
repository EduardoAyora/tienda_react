import React from 'react';

export class User extends React.Component {

    componentDidMount() {
        this.props.changeActivePage('user');
    }

    componentWillUnmount() {
        this.props.changeActivePage('');
    }

    render() {
        return (
            <div>
                User 
            </div>
        )
    }

}