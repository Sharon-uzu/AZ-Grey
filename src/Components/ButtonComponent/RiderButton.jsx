import React from 'react'
import {FiPhoneCall} from "react-icons/fi"

const RiderButton = ({buttonName}) => {
  return (
    <>
      <div className="  w-10/12 p-4 mx-auto">
        <button className="bg-yellow-500 w-full p-4 rounded-3xl mx-auto ">{buttonName}</button>
      </div>
    </>
  )
}


const CallButton = () =>{
    return(
        <>
        <ul className="flex w-full justify-center gap-4 border-solid border-yellow-500 border-2 rounded-2xl p-2 font-bold">
                <li className="text-xl"><FiPhoneCall/></li>
                <li className="text-xl">call</li>
        </ul>
        </>
    )
}


export default RiderButton
export {CallButton}