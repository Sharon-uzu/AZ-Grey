import React from "react";
import chickenRep from "../../../assets/chickenRep.png"
import {CgProfile} from "react-icons/cg";
import {GrLocation} from "react-icons/gr"
import RidersCard from "../../../Components/RidersCard";
const VendorsHomePage = () => {
  const userOderData = [
    {
      id: 1,
      firstText: "Amarachi Dents",
      secondText: "Fedral Housing Estate",
      icon1: <CgProfile/>,
      icon2: <GrLocation/>,
    },
    {
      id: 2,
      firstText: "Amarachi Dents",
      secondText: "Fedral Housing Estate",
       icon1: <CgProfile/>,
      icon2: <GrLocation/>,
    },
    {
      id: 3,
      firstText: "Amarachi Dents",
      secondText: "Fedral Housing Estate",
       icon1: <CgProfile/>,
      icon2: <GrLocation/>,
    },
    {
      id: 4,
      firstText: "Amarachi Dents",
      secondText: "Fedral Housing Estate",
       icon1: <CgProfile/>,
      icon2: <GrLocation/>,
    },{
      id: 5,
      firstText: "Amarachi Dents",
      secondText: "Fedral Housing Estate",
       icon1: <CgProfile/>,
      icon2: <GrLocation/>,
    },
    {
      id: 6,
      firstText: "Amarachi Dents",
      secondText: "Fedral Housing Estate",
       icon1: <CgProfile/>,
      icon2: <GrLocation/>,
    },
    {
      id: 7,
      firstText: "Amarachi Dents",
      secondText: "Fedral Housing Estate",
       icon1: <CgProfile/>,
      icon2: <GrLocation/>,
    },
    {
      id: 8,
      firstText: "Amarachi Dents",
      secondText: "Fedral Housing Estate",
       icon1: <CgProfile/>,
      icon2: <GrLocation/>,
    },
  ];

  return (
    <div className="md:w-11/12 w-full md:ml-auto md:mr-2 flex flex-col bg-slate-300 mt-12">
      <div className="w-full h-80  md:h-32 bg-blue-100 flex items-center rounded-b-3xl mb-8 ">
        <div className="md:w-1/12 w-1/2 md:40  grid place-items-center ml-16">
          <img
            className="md:w-52 md:h-52  w-80  object-contain "
            src={chickenRep}
            alt=""
          />
        </div>
        <h2 className="  md:text-4xl text-4xl  w-52">
          
          <span className="md:text-3xl text-3xl text-red-500">
            Chicken
          </span> <br />
          Rebublic
        </h2>
      </div>
      <div className="w-full flex flex-col justify-around gap-8  p-4">
        {userOderData?.map((users) => <RidersCard 
        users={users}
        />)}
      </div>
    </div>
  );
};

export default VendorsHomePage;
