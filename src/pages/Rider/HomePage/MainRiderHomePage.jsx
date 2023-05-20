import React, { useState, useEffect,useContext } from "react";
import chickenRep from "../../../assets/chickenRep.png";
import pz17 from "../../../assets/pz17.png";
import Modal from "react-modal";
import {CgProfile} from "react-icons/cg";
import {GrLocation} from "react-icons/gr"
import RidersCard from "../../../Components/RidersCard";

const MainRiderHomePage = () => {
  const vendorList = [
    {
      id: 1,
      item1: "Chicken",
      item2: "Republic",
      item3: "201 Ihunwo off Sani Abach Road",
      icon: chickenRep,
    },
    {
      id: 2,
      item1: "pizza",
      item2: "Jungle",
      item3: "10 NTA ROAD OFF NNPC GAS STATION",
      icon: pz17,
    },
  ];



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



  const [isRestOpen, setRestIsOpen] = useState(false);
  const toggleRestModal = () => {
    setRestIsOpen(!isRestOpen);
  };

  return (
    <>
      <div className="flex md:flex-row flex-col gap-4  justify-between w-full md:w-11/12 md:ml-auto md:mt-4 pt-8">
        {vendorList.map((data, index) => {
          return (
            <>
              <ul key={index} className="flex md:w-1/2 w-11/12 mx-auto bg-white  border-solid border-2 border-gray-500 rounded-2xl" onClick={() => {
              setRestIsOpen(true);
            }}>
                <li className="w-2/5  flex items-center justify-center">
                  <img className="w-10/12 " src={data.icon} alt="" />
                </li>
                <li className="flex w-2/5  flex-col justify-center items-left ml-8">
                  <h2 className="text-red-600 text-lg">{data.item1}</h2>
                  <p className="text-2xl">{data.item2}</p>
                  <p className="font-bold">{data.item3}</p>
                </li>
              </ul>
            </>
          );
        })}
      </div>


        {/* modal */}

        <Modal
        isOpen={isRestOpen}
        onRequestClose={toggleRestModal}
        contentLabel="Example Modal"
        className=" lg:w-10/12 md:w-3/5 mx-auto w-11/12 bg-white   text-center py-6  flex flex-col gap-6 relative rounded-xl"
        style={{
          overlay: {
            position: "absolute",
            top: "70px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#fff",
            zIndex: 2,
          },
        }}
      >
        <div className="flex justify-between w-full mx-auto font-bold text-lg">
            <span>Details</span>
            <button onClick={() => setRestIsOpen(false)}>X</button>
          </div>

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
          
      </Modal>
      
    </>
  );
};

export default MainRiderHomePage;
