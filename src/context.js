import React, { Component } from 'react';
import Axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        restaurant_list: []
    };

    componentDidMount() {
        Axios.get(`https://s3.amazonaws.com/br-codingexams/restaurants.json`)
            .then(res => {
                
                this.setState({restaurant_list: res.data.restaurants})
            })
            .catch(err => console.log(err));


    }
    
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;