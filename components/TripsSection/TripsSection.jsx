import React from 'react'
import TripsCard from '../TripsCard/TripsCard';
import tripsImg1 from'../../assets/Тбилиси.jpg';
import tripsImg2 from'../../assets/Стамбул.jpg'
import tripsImg3 from'../../assets/Дубай.jpg'
import tripsImg4 from'../../assets/Пхукет.png'

const trips = [
  {
      title:'Тбилиси',
      month: 'апрель',
      price: '83.000',
      transport: 'НА АВТОБУСЕ',
      quantity: 10,
      image:tripsImg1,  
      quantityBox:true 
  },
  {
    title:'Стамбул',
    month: 'май',
    price:'110.000',
    transport:'НА САМОЛЕТЕ',
    image:tripsImg2,
    quantityBox:false 
  },
  {
    title:'Дубай',
    month: 'июнь',
    price:'220.000',
    transport:'НА САМОЛЕТЕ',
    quantity: 15,
    image:tripsImg3,
    quantityBox: true
  },
  {
    title:'Пхукет',
    month: 'сентябрь',
    price: '135.000',
    transport:'САМОЛЕТ + ПАРОМ',
    quantity: 11,
    image:tripsImg4,
    quantityBox: true
  }
];

function TripsSection() {
  return (
    <div>
     { trips.map(trip => (
        <TripsCard 
          title={trip.title}
          month={trip.month}
          price={trip.price}
          transport={trip.transport}
          image={trip.image}
          quantity={trip.quantity}
          quantityBox={trip.quantityBox}/>
      ))}
    </div>
  );
}

export default TripsSection