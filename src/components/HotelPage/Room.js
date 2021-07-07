import React from 'react'
import { faCoffee, faGamepad, faShower, faSmoking, faTree, faWifi,faStar } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

function Room({room ,stars}) {
    const roomFeatures=[
        {icon:faWifi,name:"Free Wifi",type:"hasFreeWifi"},
        {icon:faShower,name:"Jacuzzi",type:"hasJacuzzi"},
     {icon:faCoffee,name:"Coffee Machine",type:"hasCoffeeMachine"},
        {icon:faTree,name:"Balcony",type:"hasBalcony"},
        {icon:faSmoking,name:"Smooking Rooms",type:"hasSmookingRooms"},
       {icon:faGamepad,name:"Games Hall",type:"hasGamesHall"}
    ]
    let k=[];
    for(let i=0;i<stars;i++){
        k.push("")
    }

    return (
        <div className='room '>
                <div className='roomImg '>
                <img src={room.imagesUrl[0]}></img>
                </div>
                <div className='roomInfo '>
                <h3> {room.type} </h3>
                <div className='stars'> {k.map(i=><span><FontAwesomeIcon className='stars'      icon={faStar}/></span>)}</div>

                 <p>Sleeping {room.size} people</p>
              
       
                </div>
                <div className='roomCheke '>
                 
                 <Link to="/singIn"><a className='booking' style={{cursor:"pointer"}}>Book This Room {`>`}</a></Link> 
                </div>
                <div className='features'>
                 {
                roomFeatures.map((feature)=>
                ( room.features[feature.type] ? <li className='feature '>
                    <i><FontAwesomeIcon   icon={feature.icon}/></i>
                    <p>{feature.name}</p>              
                    
                </li>:""  ) 
                    )
                }
                 <div className='price'>{room.price}$</div>
                 </div>
            </div>
    )
}

export default Room
