import React from "react";

import SignUpButton from "../Components/ButtonComponent/SignUpButton";
import { Link } from "react-router-dom";
import { BsArrowRepeat } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IconContext } from "react-icons/lib";
const UserNavBar = (props) => {
  
  return (
    <>
      <div className={`${props.navClassName} fixed top-0  z-40`} >
        <div className={props.divClassName}>

        <Link to={props.logoImage}> <img src={props.image} alt="" className={props.imageClassName} />  </Link>
        </div>
        <ul className={props.listClassName}>
          <Link to={props.link}>
             <SignUpButton text={props.text} className={props.btnClassName} /> 
          </Link>
          {props.item1}
          <div className={props.cartIcon}>
            
            {props.item2}
            <span className='text-sm bg-red-600 h-6 flex justify-center rounded-2xl items-center w-6' >{props.number}</span>
          </div>
          
        </ul>
      </div>
    </>
  );
};

const MainHeaderBar = (props) => {
  return (
    <>
      <IconContext.Provider value={{ color: "gray" }}>
        <div className="fixed top-0 h-20 hidden   md:flex flex-col justify-around z-40 right-0 left-20  bg-yellow-200">
          <div className="w-10/12 ml-auto flex justify-between items-center">
            <h1 className="text-3xl">{props.headTitle}</h1>
            <ul className="flex gap-4 mr-20 text-2xl">
              <li className="">
                <BsArrowRepeat />
              </li>
              <li>
                <AiOutlineMail />
              </li>
            </ul>
          </div>
          <div className="flex justify-around">
            <button className={`ml-32 bg-red-500 w-32 text-white rounded-lg ${props.btnState}`}>{props.btnText}</button>
            <div className="ml-auto mr-16 relative">
              <input
                className="p-1 font-bold outline-none border-solid border-2 border-gray-200 rounded-lg"
                type="search"
                name=""
                id=""
                placeholder="Search"
              />
              <CiSearch className="absolute top-2 right-3 text-2xl text-gray-400" />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default UserNavBar;
export { MainHeaderBar };
