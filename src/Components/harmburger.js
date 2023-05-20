import React from "react";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
const Harmburger = (props) => {

  return (
    <>
      <div className={props.harbClassName}>
        <button className="m-2 text-3xl " onClick={props.toggle}>
          <GiHamburgerMenu/>
        </button>
        <div className="flex flex-col gap-8 h-full">
        {props.HarmburgerData[props.pageNum].map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`${props.isOpen ? "w-11/12 " : "hidden"} mt-4 mx-auto  flex justify-evenly border-solid border-2 border-red-50 items-center h-16`}
          >
            {props.isOpen && (
            
              <>
                <div className="text-2xl">{item.icon}</div>
                <div className=" text-left">{item.name}</div>
              </>
            )}
          </Link>
        ))}
  
        </div>
      </div>
    </>
  );
};

export default Harmburger;
