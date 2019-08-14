import React, { Component } from 'react';
import  { Consumer } from '../context';

class Restaurant extends Component {

    handleClick(event) {
        this.props.updateDetailView(this.props.restaurant);
        this.props.updateToggle(true);
    }
    
    render() {
        return (
            <Consumer>
                {value => {
                    
                    

    const divStyle = {
        backgroundImage: 'url("assets/gradientbg.png"), url(' + this.props.restaurant.backgroundImageURL + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'


    };

    const { restaurant } = this.props;
   
    return (
        <div className="grid-item" style={divStyle} onClick={this.handleClick.bind(this)}>
            <span className="category">{restaurant.category}</span> 
            <span className="name">{restaurant.name}</span> 
           
        </div> 
    )
                }}
            </Consumer>
        )
    }
}

export default Restaurant
