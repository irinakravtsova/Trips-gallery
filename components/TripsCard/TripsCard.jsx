import React from 'react'
import './TripsCard.css'
import tripPassengerImg from'../../assets/пассажиры.svg'


function TripsCard(props) {
  return (
    <div className='trip-box'>
        
        <div className='trip-transport-wrapper'>
         <div  className='trip-transport'>{props.transport}</div>
         { props.quantityBox && (<div className='trip-passenger'>{props.quantityBox}
            <p className='trip-passenger-quantity'>{props.quantity}</p>
            <img className='trip-passender-image' src={tripPassengerImg} alt="" />
         </div>) }
         
        </div>
        
        <img className='trip-image' src={props.image} alt={props.title} />
        <p className='trip-title'>{props.title}, {props.month} — {props.price}</p>
        
      
       
    </div>
  );
  
}

export default TripsCard