import React, { Component } from 'react';
import MapContainer from './MapContainer';

class DetailView extends Component {


    render() {
        const { contact } = this.props.detailInfo
        const { location } = this.props.detailInfo

        const phone = !!contact && !!contact.formattedPhone 
          ? <p className='detail-spacer'>{contact.formattedPhone}</p> 
          : <p className='detail-spacer'>No Phone Available</p>

        const twitter = !!contact && !!contact.twitter 
          ? <p className='detail-spacer'>@{contact.twitter}</p> 
          : <p className='detail-spacer'>No Twitter Handle</p> 

        const address = !!location && !!location.address 
          ? <span className=''>{location.address}</span> 
          : <span className=''></span> 
          
        const city = !!location && !!location.city 
          ? <span className=''>{location.city}</span> 
          : <span className=''></span> 

        const usState = !!location && !!location.state
          ? <span className=''>{location.state}</span> 
          : <span className=''></span> 

        const zip = !!location && !!location.postalCode 
          ? <span className=''>{location.postalCode}</span> 
          : <span className=''></span> 

          let sideDrawerClass = "side-drawer";

          if(this.props.show){
            sideDrawerClass ="side-drawer open"
          }

          if (this.props.detailInfo.name === undefined){
            return <div className={sideDrawerClass}></div> ;
        } else {

        return (
                                   
                            <div className={sideDrawerClass}>
                                <div className="detail-map">
                                <MapContainer mapInfo={location}/>
                                </div>
                                <div className="detail-heading">
                                    <span className="name">{this.props.detailInfo.name}</span>
                                    <span className="category">{this.props.detailInfo.category}</span>
                                </div>
                                <div className="detail-info">
                                    {address}<br></br>
                                    {city}, {usState} {zip}<br></br>
                                    {phone}<br></br>
                                    {twitter}
                                </div>
                            </div>
                            
             
        )
        }
    }
}

export default DetailView
