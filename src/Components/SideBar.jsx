import React, { useState } from "react";
import { Link } from "react-router-dom";

// import logo from "../../assets/photo1670686438-removebg-preview.png";
import logo from "../assets/photo1670686438-removebg-preview.png";

import {FaCommentAlt} from "react-icons/fa";
const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  

  return (
    <>
      <div  className="bg-white md:flex pt-4 md:p-0">
        <div
          className={`hidden bg-gray-100 h-screen md:flex flex-col justify-center  fixed z-50
          ${isOpen ? "w-20" : "w-32 "} `}
        >
          <div
            onClick={toggle}
            className="flex justify-center item-center flex-col "
          >
            <div className="m-2 w-4/5 flex justify-center item-center  bg-black rounded-full ">
              <img  src={logo} alt="" />
            </div>
          </div>
          <div className={`h-1/2 flex justify-between item-center flex-col my-auto`}>
            {props.menuItem[props.pageNum].map((item, index) => (
              <Link
              
                to={item.path}
                key={index}
                className={`m-2 w-4/5  item-center bg-gray-200 rounded-full p-6
                ${isOpen? 'justify-center': 'justify-evenly items-center'}`}
              >
                {isOpen ? (
                  <div className="icon">{item.icon}</div>
                ) : (
                    <>
                    <div className="icon">{item.icon}</div>
                  <div className="icon">{item.name}</div>
                  </>
                )}
              </Link>
            ))}
          </div>
          <div className=" mb-8 mt-auto flex ">
            <ul className=" list-none flex justify-evenly items-center  m-auto w-11/12 h-8">
                <li className="text-xs"><FaCommentAlt/></li>
                <li className="text-xs">Settings</li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-green-300">{props.children}</div>
      </div>
    </>
  );
};

export default Sidebar;
