import React, { useState, useEffect,useContext } from "react";
import { AppContext } from "../Context/AppContext"; 
import axios from "axios"
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Modal from "react-modal";
import Select from "react-select";
import baseUrl from "../Components/baseUrl"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import UserNavBar from "../Components/HeaderBar";
import p1 from "../assets/f1dc3c1262230b2b.png";
import p2 from "../assets/bg.jpg";
import p3 from "../assets/bg3.png";
import p4 from "../assets/bg4.png";
import  UserNavBar from '../Components/HeaderBar'

import { Swiper, SwiperSlide } from 'swiper/react';
import logo from "../assets/photo1670686438-removebg-preview.png"
import { AiFillBell } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import Basket from "../Components/Basket"
// import { useNavigate } from "react-router-dom";


const Order = () => {

  const [selectDrinks, setSelectDrinks] = useState();
  const [selectRestaurant, setSelectRestaurant] = useState();
  const {cart} = useContext(AppContext)

  // const RegisterForm = () => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });
  
  //   const handleInputChange = (event) => {
  //     setFormData({
  //       ...formData,
  //       [event.target.name]: event.target.value,
  //     });
  //   };
  
  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     try {
  //       const response = await axios.post("/api/register", formData);
  //       // Handle success response
  //     } catch (error) {
  //       // Handle error response
  //     }
  //   };
  


  let data = JSON.stringify({
    "fullname": "Daniel Nneeh",
    "email": "chridanielwise@gmail.com",
    "password": "123458",
    "department": "Front-end",
    "role": "Vendor",
    "phone": "0909378452134",
    "address": "some where in uk"
  });

  useEffect(() => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,

      headers: {
        'Content-Type': 'application/json',
      }
    };
    axios.post(`${baseUrl}users/login`, data, config)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  })

  // const [selectModalContent, setselectModalContent] = useState()

  const userData = [
    {
      id: 1,
      img: p2,
      name: "Rice & Chicken",
      price: 3000,
      order: "Order",
    },
    {
      id: 2,
      img: p1,
      name: "Rice & Beef",
      price: 2500,
      order: "Order",
    },
    {
      id: 3,
      img: p3,
      name: "Rice & moimoi",
      price: 2000,
      order: "Order",
    },

    {
      id: 4,
      img: p4,
      name: "Beans",
      price: 2000,
      order: "Order",
    },
    {
      id: 5,
      img: p2,
      name: "Egusi soup",
      price: 4000,
      order: "Order",
    },
    {
      id: 6,
      img: p1,
      name: "Spaghetti",
      price: 1500,
      order: "Order",
    },

    {
      id: 7,
      img: p2,
      name: "Rice & Chicken",
      price: 3000,
      order: "Order",
    },
    {
      id: 8,
      img: p1,
      name: "Rice & Beef",
      price: 2500,
      order: "Order",
    },
    {
      id: 9,
      img: p3,
      name: "Rice & moimoi",
      price: 2000,
      order: "Order",
    },
  ];

  // const getOrder = () =>{
  //   let cart = {}
  //     for(let i = 1; i < userData.length+1; i++){
  //       cart[i] = 0;
  //     }
  //     return cart 

  // }


  const [foodItems, setFoodItems] = useState([])

  const storeItem = (Id) => {
    let stored = userData.filter((val) => val.id === Id)
    return setFoodItems(stored[0])
  }

  // meal

  const [isCart, setIsCart] = useState(false);


  // const [cardItems, setCardItems] = useState([])

  // const [id] = userData
  // const storeCardItem = (Id) =>{
  //   let stored = userData.filter((val)=> val.id === Id)
  //   return setCardItems(() => (stored[0]))
  // }


  // modal

  const [isMealOpen, setMealIsOpen] = useState(false);
  const toggle1Modal = () => {
    setMealIsOpen(!isMealOpen);
  };

  // Modal2
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Modal3

  const [isModal2Open, setModal2IsOpen] = useState(false);
  const toggle2Modal = () => {
    setModal2IsOpen(!isModal2Open);
  };



  // const [isCartOpen, setCartIsOpen] = useState(false);
  // const toggleCModal = () => {
  //   setCartIsOpen(!isCartOpen);
  // };

  // const [isCartOpen, setCartIsOpen] = useState(false);
  // const toggleCModal = () => {
  //   setCartIsOpen(!isCartOpen);
  // };

  const options = [
    { value: "Admin", label: "Admin" },
    { value: "Vendor", label: "Vendor" },
    { value: "Rider", label: "Rider" },

  ];



  const option2 = [
    { value: "Coke", label: "Coke" },
    { value: "Fanta", label: "Fanta" },
    { value: "Sprite", label: "Sprite" },
    { value: "Malt", label: "Malt" },
    { value: "Water", label: "Water" },

  ];



  const options1 = [
    { value: "Genesis", label: "Genesis" },
    { value: "Kilimanjaro", label: "Kilimanjaro" },
    { value: "Domino", label: "Domino" },
  ];

  // price count


  const [num, setNum] = useState(1);
  // const [price, setPrice] = useState(foodItems.price);
  //const [count,setCount] = useState(0);

  const incNum = () => {
    setNum(num + 1)
  };

  const decNum = () => {
    if (num > 1)
      setNum(num - 1)

  };

  const [num2, setNum2] = useState(0);
  const incNum2 = () => {
    setNum2(num2 + 1)
  };

  const decNum2 = () => {
    if (num2 >= 1)
      setNum2(num2 - 1)
  };

  return (
    <div className="relative">
      <UserNavBar
        image={logo} imageClassName="w-20 object-contain"
        logoImage="/"
        text="Oder now"
        navClassName="w-full h-20 bg-black flex justify-between items-center"
        divClassName="w-3/5 lg:w-1/5 ml-4 "
        btnClassName="text-lg text-black border-solid font-bold"
        listClassName="flex w-1/5 mr-4 justify-around items-center gap-2 bg-red text-white text-4xl"
        number = {cart.length}
        item1={<AiFillBell className="cursor-pointer text-2xl" />}
        cartIcon="flex"
        item2={<BsFillCartFill className="cursor-pointer text-2xl" onClick={() => {
          setIsCart(true)
        }}

          cartNumber="flex text-sm bg-red-600 h-6 flex justify-center rounded-2xl items-center w-6"
        />}
      />

      {isCart && <Basket setIsCart={setIsCart} isCart={isCart} />}



      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{ zIndex: 1 }}
      >
        <SwiperSlide>
          <img src={p1} alt="" className="h-64 " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p2} alt="" className="h-64" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p4} alt="" className="h-64" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p3} alt="" className="h-64" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p2} alt="" className="h-64" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p4} alt="" className="h-64" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p3} alt="" className="h-64" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p2} alt="" className="h-64" />
        </SwiperSlide>
      </Swiper>

      <div className="w-11/12  mx-auto flex flex-wrap my-20 justify-between">
        {userData &&
          userData.map(({ id, img, name, price, order }, index) => {
            return (
              <div
                className="w-2/8 border-2 border-solid border-yellow p-4 rounded-md mb-4"
                key={index}
              >
                <img src={img} alt="" className="w-full h-48 mb-4" />
                <span className="flex justify-between font-bold text-lg pb-4">
                  {name}
                  <span></span>
                  {price}
                </span>
                {/* <SignUpButton text={`order`} className=" text-md hover: text-black border-solid border-2 font-bold"  onClick={() => setIsOpen(true)} />  */}
                <button
                  className="text-md hover: text-black border-solid border-2  w-fit px-5 py-1 lg:2/5 lg:h-12  md:h-12 rounded-2xl font-semibold"
                  style={{
                    border: "2px solid rgba(254, 206, 47, 1)",
                    backgroundColor: "rgba(254, 206, 47, 1)",
                  }}
                  onClick={() => {
                    storeItem(id)
                    setMealIsOpen(true)
                  }}
                >
                  {order}
                </button>


              </div>
            );
          })}



      </div>
      <div>

        <Modal
          isOpen={isMealOpen}
          onRequestClose={toggle1Modal}
          contentLabel="Example Modal"
          className="  mx-auto w-2/4 bg-white mt-1/5  text-center py-10  relative top-1/5 mt-6 rounded-xl"
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "hsl(0, 0%, 0%, .2)",
              zIndex: 2,
            },
          }}
        >

          <div className="flex justify-between w-11/12 mx-auto font-bold text-lg pb-4 ">
            <span>MEAL</span>
            <button onClick={() => setMealIsOpen(false)}>X</button>
          </div>
          <div className="w-11/12 m-auto mb-2">
            <img src={foodItems.img} alt="" className="w-1/5" style={{ objectFit: 'contain' }} />
          </div>

          <form className="flex justify-between">


            <div className="flex w-2/3">
              <div className="flex flex-col gap-6 w-3/5" >
                <h1 className="font-bold">SELECT</h1>

                <div className="border-solid border-rgb(59 130 246 / 0.5) flex flex-col text-start justify-center border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none">{foodItems.name}</div>
                <Select
                  placeholder=" drinks"
                  options={option2}
                  value={selectDrinks}
                  onChange={(text) => setSelectDrinks(text)}
                  className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md text-start h-10 outline-none"
                />


                <Select
                  placeholder="restaurants"
                  options={options1}
                  value={selectRestaurant}
                  onChange={() => setSelectRestaurant()}
                  className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md text-start h-10 outline-none"
                />
              </div>

              <div className="flex flex-col gap-6 w-2/5">
                <h1 className="font-bold" >AMOUNT</h1>

                <span className="w-4/5 mx-auto flex justify-between h-10 items-center border-2 border-solid border-red" >
                  <span className="flex w-1/5 justify-center h-full items-center" style={{ background: '#5e5e5e', cursor: 'pointer' }} onClick={decNum} >-</span>
                  <span style={{ borderLeft: '2px solid #5e5e5e', borderRight: '2px solid #5e5e5e', height: '100%' }} className="flex items-center w-3/5 justify-center">{num}</span>
                  <span className="flex  w-1/5 justify-center h-full items-center" style={{ background: '#5e5e5e', cursor: 'pointer' }} onClick={incNum} >+</span>
                </span>
                <span className="w-4/5 mx-auto flex justify-between h-10 items-center border-2 border-solid border-red">
                  <span className="flex w-1/5 justify-center h-full items-center" style={{ background: '#5e5e5e', cursor: 'pointer' }} onClick={decNum2}>-</span>
                  <span style={{ borderLeft: '2px solid #5e5e5e', borderRight: '2px solid #5e5e5e', height: '100%' }} className="flex items-center w-3/5 justify-center" >{num2}</span>
                  <span className="flex w-1/5 justify-center h-full items-center" style={{ background: '#5e5e5e', cursor: 'pointer' }} onClick={incNum2}>+</span>
                </span>




              </div>

            </div>

            <div className="w-1/3 m-auto flex flex-col gap-6 ">
              <h1 className="text-center font-bold">PRICES</h1>

              <p className="h-10">N{num * foodItems.price}</p>
              <p className="h-10">N{num2 * 300}</p>
              <hr className="w-3/5 m-auto" />

              <span className="">{(num * foodItems.price) + (num2 * 300)}</span>
              <hr className="w-3/5 m-auto" />
              <div className="">
                <input
                  type="button"
                  value="Checkout"
                  className=" my-4 border-solid border-black border-4 w-fit mx-auto py-3 px-2 w-11/12 rounded-xl hover:bg-black cursor-pointer hover:text-white font-bold"
                  onClick={() => setIsOpen(true) & setMealIsOpen(false)}
                />

              </div>

            </div>


          </form>

        </Modal>


      </div>


      {/* Modal2 */}


      <Modal isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='Example Modal'

        className=' lg:w-1/2 md:w-3/5 mx-auto w-11/12 bg-white   text-center py-6  flex flex-col gap-6 relative rounded-xl'
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'hsl(0, 0%, 0%, .2)',
            zIndex: 2,

          }
        }}
      >

        <form className=' flex flex-col gap-6'>
          <div className='flex justify-between w-11/12 mx-auto font-bold text-lg'>
            <span>SIGNIN</span>
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>



          <input type="email" placeholder='Email' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none' />
          <input type="password" placeholder='Password' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none' />
          <input type="submit" value="SignIn" className='border-solid border-black border-4 w-fit mx-auto py-3 px-4 rounded-xl hover:bg-black cursor-pointer hover:text-white font-bold' />


          <h1 onClick={() => setModal2IsOpen(true) & setIsOpen(false)}>Don't have an account? <span className='cursor-pointer text-yellow-600'>SIGN UP</span></h1>
        </form>
      </Modal>


      {/* Modal3 */}

      <Modal isOpen={isModal2Open}
        onRequestClose={toggle2Modal}
        contentLabel='Example Modal'

        className=' lg:w-1/2 md:w-3/5 mx-auto w-11/12 bg-white mt-1/5  text-center py-6  flex flex-col gap-6 relative top-1/5 mt-6 rounded-xl'
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'hsl(0, 0%, 0%, .2)',
            zIndex: 2,

          }
        }}
      >

        <form className=' flex flex-col gap-6'>
          <div className='flex justify-between w-11/12 mx-auto font-bold text-lg'>
            <span>SIGNUP</span>
            <button onClick={() => setModal2IsOpen(false) & setIsOpen(false)}>X</button>
          </div>



          <input type="text" placeholder='Full Name' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none' />
          <input type="email" placeholder='Enter Email' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none' />
          <input type="tel" placeholder='Phone Number' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none' />
          <input type="password" placeholder='Password' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none' />
          <input type="text" placeholder='Address' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none' />
          <Select placeholder="Select roles" options={options} className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md text-start h-10 outline-none' />
          <input type="file" name="" id="" className="w-11/12 m-auto" />
          <input type="submit" value="SignUp" className='border-solid border-black border-4 w-fit mx-auto py-3 px-4 rounded-xl hover:bg-black cursor-pointer hover:text-white font-bold' />


          <h1 onClick={() => setIsOpen(true) & setModal2IsOpen(false)}>Already have an account? <span className='cursor-pointer text-yellow-600'> SIGN IN</span></h1>
        </form>
      </Modal>
    </div>
  );
};

export default Order;
