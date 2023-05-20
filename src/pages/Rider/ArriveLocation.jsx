import React from "react";
import chickenRep from "../../assets/chickenRep.png";
import RiderButton from "../../Components/ButtonComponent/RiderButton"
import {CallButton} from "../../Components/ButtonComponent/RiderButton"
const ArriveLocation = () => {
  return (
    <div className="md:mt-16 md:w-10/12 ml-auto flex flex-col justify-around  items-center h-full gap-10 bg-slate-300">
      <div className="md:w-1/12 md:40  flex justify-center items-center h-32 ">
        <img
          className="md:w-20 md:h-20  w-40 object-contain "
          src={chickenRep}
          alt=""
        />
      </div>
      <div className="h-1/2  w-10/12 mx-auto p-4 flex flex-col  bg-white rounded-3xl gap-4">
        <h2 className="  md:text-4xl text-2xl  w-52">
          <span className="md:text-3xl text-lg text-red-500">Chicken</span>
          <br />
          Rebublic
        </h2>
        <p className="my-auto text-sm">
          Curabitur quisque suscipit sodales adipiscing. Orci enim ultrices et
          nulla diam tempus neque pharetra. Volutpat fringilla scelerisque
          pretium parturient. Risus lectus aliquet nullam adipiscing sed vita
        </p>
        <CallButton/>   
      </div>
      <RiderButton buttonName="Reached pickup Location"/>
    </div>
  );
};

export default ArriveLocation;
