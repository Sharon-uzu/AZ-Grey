// import Store1 from '../Screens/Store1';
// import Store2 from '../Screens/Store2';
// import { useParams } from 'react-router-dom';
// import React, { useState } from "react";
// import { AiFillBell } from "react-icons/ai";
// import { BsFillCartFill } from "react-icons/bs";
// import UserNavBar from '../Components/HeaderBar';
// import logo from "../assets/photo1670686438-removebg-preview.png";
// import Basket from "../Components/Basket";
// import { AiOutlinePlusSquare } from "react-icons/ai";
// import bg2 from "../assets/r2.jpg";
// import bg3 from "../assets/r3.jpg";
// import bg1 from "../assets/r1.jpg";
// import bg4 from "../assets/r4.jpg";

import { restaurantData } from '../Components/OrderR';

const Stores = (props) => {

  // let params = useParams();

  // const mealData = [
  //   {
        
  //     id:1,
  //     title:'Max meal',
  //     price:2000,
  //     img: bg2,
  //     details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  autem minus',

  //   },
  //   {
  //     id:2,
  //     title:'Dodo Max meal',
  //     price:2500,
  //     img: bg3,
  //     details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  autem minus',

  //   },
  //   {
  //     id:3,
  //     title:'Max meal',
  //     price:4000,
  //     img: bg2,
  //     details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  autem minus',

  //   },

  //   {
  //     id:4,
  //     title:'Refuel meal',
  //     price:3000,
  //     img: bg1,
  //     details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  autem minus',

  //   },
  //   {
  //     id:5,
  //     title:'Max meal',
  //     price:3500,
  //     img: bg4,
  //     details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  autem minus',

  //   },
  //   {
  //     id:6,
  //     title:'Max meal',
  //     price:2000,
  //     img: bg2,
  //     details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  autem minus',

  //   }

    
  // ];

  return (
    <div>
      {restaurantData.brand === 'Chicken Republic'? 
      <>
      <h1>hi</h1>
      </>

       : 
       <>
        <h1>hello</h1>
       </>
      
       } 
    </div>
  )
}

export default Stores
