import React, { useContext } from "react";
import { AiFillBell } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import UserNavBar from "../Components/HeaderBar";
import logo from "../assets/photo1670686438-removebg-preview.png";
import Basket from "../Components/Basket";
import { AiOutlinePlusSquare } from "react-icons/ai";
import bg2 from "../assets/r2.jpg";
import bg3 from "../assets/r3.jpg";
import bg1 from "../assets/r1.jpg";
import bg4 from "../assets/r4.jpg";
import { AppContext } from "../Context/AppContext";

const mealData = [
  {
    id: 1,
    title: "Max meal",
    price: 2000,
    img: bg2,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  autem minus",
  },
  {
    id: 2,
    title: "Dodo Max meal",
    price: 2500,
    img: bg3,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  autem minus",
  },
  {
    id: 3,
    title: "Max meal",
    price: 4000,
    img: bg2,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  autem minus",
  },

  {
    id: 4,
    title: "Refuel meal",
    price: 3000,
    img: bg1,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  autem minus",
  },
  {
    id: 5,
    title: "Max meal",
    price: 3500,
    img: bg4,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  autem minus",
  },
  {
    id: 6,
    title: "Max meal",
    price: 2000,
    img: bg2,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  autem minus",
  },
];
const Store1 = () => {

  const {
    cart,
    isCart,
    setIsCart,
    addToCart
  } = useContext(AppContext)

  
 



  return (
    <div className="relative">
     
     
        
        <UserNavBar
        image={logo} imageClassName="w-20 object-contain"
        logoImage="/"
        text="shop"
        navClassName="w-full h-20 bg-black flex justify-between items-center"
        divClassName="w-3/5 lg:w-1/2 md:w-1/2 ml-4 "
        btnClassName="hidden"
        cartIcon="flex"
        number={cart.length}
        listClassName="flex sm:w-2/5 md:w-1/5 lg:w-1/5 mr-4 justify-around items-center   gap-2 bg-red text-white text-4xl"
        item1={<AiFillBell className="cursor-pointer text-2xl"/>}
        item2={<BsFillCartFill className="cursor-pointer text-2xl" onClick={() =>(setIsCart(true))} />}
      /> 

      {isCart && (
        <Basket/>
      )}


      <div
        className="mt-20 gap-8 text-white relative border-red-50 flex justify-center flex-col  w-full  h-80 bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="absolute h-full w-full bg-black opacity-40"></div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-center z-0">
          Chicken Republic
        </h1>
      </div>

      <h1 className="text-4xl font-bold w-11/12 m-auto pt-16">MEALS</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-11/12 mx-auto pb-8 mt-4">

        {mealData.map(({id, title, price, img, details}) =>{
          return(
            <div
              key={id}
              className="mt-4 m-auto p-2 border-solid border-2 rounded-md border-gray-300 w-11/12 "
            >
              <div className="flex justify-between ">
                <img src={img} alt="" className="w-3/12" />
                <div className="8/12 ml-4">
                  <h3 className="text-xl mb-2">{title}</h3>
                  <p className="text-sm">{details}</p>
                </div>
              </div>

                      <div className="flex justify-between mt-6">
                      <h5 className="text-xl">NGN{price}</h5>
                          <AiOutlinePlusSquare className="cursor-pointer text-3xl text-yellow-400"
                           onClick={ ()=> addToCart(id)}
                           />
                      </div>
                    </div>
          )
        })}
      </div>


    </div>
 
  );
};

export default Store1;
export {mealData}
