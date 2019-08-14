import React, { Component } from 'react';
import  { Consumer } from '../context';
import Restaurant from '../components/Restaurant';

class ListView extends Component {
    constructor(props) {
        super();
      }

      updateDetailView(value) {
        this.props.updateDetailView(value);
    }

    updateToggle(value) {
        this.props.updateToggle(value);
    }



    render() {
        return (
            <Consumer>
                {value => {
                    
                    const { restaurant_list } = value;

                    if (restaurant_list === undefined || restaurant_list.length === 0){
                        return <h1>LOADING</h1> ;
                    } else {

                        return (
                                                   
                            <div className="grid-row">
                                
                             
                            {restaurant_list.map((item, i) => (
                                <Restaurant key={i} restaurant={item} updateDetailView={this.updateDetailView.bind(this)} updateToggle={this.updateToggle.bind(this)} />
                            ))}
                             
                            </div>
                        
                        
                        );
                    }

                                      
                }}
            </Consumer>
        )
    }
}

export default ListView


    