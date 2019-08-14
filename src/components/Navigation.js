import React, { Component } from 'react';

class Navigation extends Component {

    handleClick(event) {
        this.props.updateToggle(false);
    }

    render() {
                                     
        
        const drawerToggle = this.props.detailViewOpen === true
        ? <span className="pointer" onClick={this.handleClick.bind(this)}><img src="assets/ic_webBack@2x.png" height="30px" width="16px" alt="back icon"></img></span> 
        : <span><img src="assets/spacer.png" height="30px" width="16px" alt="spacer"></img></span>

   
    return (
        <nav>
            <div className="nav-bar-container">
            <span>{drawerToggle}</span>
            <span>Lunch Tyme</span>
            <span><img src="assets/icon_map@2x.png" height="30px" width="30px" alt="map icon"></img></span>
            </div>
        </nav>
    )
               
        
    }
}







    

export default Navigation
