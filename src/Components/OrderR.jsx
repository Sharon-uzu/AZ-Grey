import React, {useContext } from "react";
import { AppContext } from "../Context/AppContext";
import bg from "../assets/rs.jpg";
import { AiFillBell } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import logo from "../assets/photo1670686438-removebg-preview.png";
import UserNavBar from '../Components/HeaderBar';
import Basket from "../Components/Basket";
import bg1 from "../assets/r1.jpg";
import bg2 from "../assets/r2.jpg";
import bg3 from "../assets/r3.jpg";
import bg4 from "../assets/r4.jpg";
import { Link } from "react-router-dom";

const restaurantData = [
  {

    id: 1,
    img: bg1,
    brand: "Chicken Republic",
    path: "/OrderR/Store1",
    status: "package"
  },
  {
    id: 2,
    img: bg2,
    brand: "Chicken Republic",
    path: "/OrderR/Store1",
    status: "package"
  },
  {
    id: 3,
    img: bg3,
    brand: "Chicken Republic",
    path: "/OrderR/Store1",
    status: "package"
  },

  {
    id: 4,
    img: bg4,
    brand: "Genesis",
    path: "/OrderR/Store2",
    status: "package"
  },
  {
    id: 5,
    img: bg,
    brand: "Genesis",
    path: "/OrderR/Store2",
    status: "package"
  },
  {
    id: 6,
    img: bg1,
    brand: "Genesis",
    path: "/OrderR/Store2",
    status: "package"
  }


];


const OrderR = () => {

  const {cart,isCart, setIsCart} = useContext(AppContext)


  return (
    <>

    <UserNavBar
        image={logo} imageClassName="w-20 object-contain"
        link="/"
        text="Oder"
        navClassName="w-full h-20 bg-black flex justify-between items-center"
        divClassName="w-2/5 lg:w-1/2 md:w-1/2 ml-4 "
        btnClassName="hidden"
        cartIcon="flex"
        number = {cart.length}
        listClassName="flex sm:w-2/5 md:w-1/5 lg:w-1/5 mr-4 justify-around items-center   gap-2 bg-red text-white text-4xl"
        item1={<AiFillBell className="cursor-pointer text-2xl"/>}
        item2={<BsFillCartFill className='cursor-pointer text-xl' onClick={() => {setIsCart(true)}}/>}
       />

      {isCart && <Basket />}

      <div className='mt-20 gap-8 text-white  border-red-50 flex justify-center flex-col  w-full  h-80 bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: `url(${bg})` }}>

        {/* <div className="absolute h-full w-full bg-black opacity-40" ></div> */}
        <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl text-center '>Find Your Favourite Restaurants </h1>

      </div>

      <h1 className="text-4xl font-bold w-11/12 m-auto pt-16">All Restaurants</h1>

      <div className="list-of-vendors grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-11/12 mx-auto mb-8 relative z-0">

        {restaurantData &&
          restaurantData.map(({ img, brand, path }, index) => {
            return (

              <Link key={index} to={path} props={restaurantData}>
                <div className="w-11/12 m-auto h-56 bg-no-repeat bg-center bg-cover mt-8 relative flex items-center justify-center font-bold" style={{ backgroundImage: `url(${img})` }} >
                  <div className="absolute w-full h-full bg-black opacity-40 z-10"></div>
                  <h1 className="z-40 text-white text-4xl">{brand}</h1>
                </div>
              </Link>

            )

          }

          )
        }

      </div>




    </>
  )
}

export default OrderR
export { restaurantData }