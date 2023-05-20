import React from 'react'
import Sidebar from '../../Components/SideBar'
import { Outlet } from 'react-router'
import {MainHeaderBar} from "../../Components/HeaderBar"
import Genesis from "../../../src/assets/gen16.png"
import Kilimanjaro from "../../assets/pz17.png"
import Chicken from "../../assets/chicken18.png"
import MenuItem from "../../Components/MenuItem"
const Vendor = () => {

  const VendorDataList = [
    {
      item1: Genesis,
      item2: "GENESIS",
      item3: "22 old aba road , market junction......",
      item4: "ACTIVE",
    },
    {
      item1: Kilimanjaro,
      item2: "KILIMANJARO",
      item3: "22 old aba road , market junction......",
      item4: "IN-ACTIVE",
    },
    {
      item1: Chicken,
      item2: "CHICKEN REPUBLIC",
      item3: "22 old aba road , market junction......",
      item4: "ACTIVE",
    }
  ];
  return (
    <>
      <Sidebar pageNum={1} display="hidden "
      menuItem={MenuItem}>
        <MainHeaderBar btnText="Create" headTitle="VENDOR DASHBOARD"/>
       

      <div className="w-11/12 ml-20 mt-8">
        <div className="w-11/12 mx-auto">
        <div style={{background:"hsla(0, 2%, 95%, 1)"}} className="w-full  h-12 mb-4 flex items-center border-solid border-2 border-gray-200 rounded-xl ">
          <ul  className="flex justify-around  w-full">
            <li className="text-right col-span-2">IMAGE</li>
            <li className="col-span-2 text-center">NAME</li>
            <li className="col-span-2 text-right">PRICE</li>
            <li className="col-span-2 text-right">STATUS</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
        {VendorDataList &&
          VendorDataList.map((val,index) => {
            const {item1,item2,item3,item4} = val
            console.log(val)
            return (
              <>
                <ul style={{backgroundColor: "rgba(170, 74, 74, 0.1)"}} 
                className="flex justify-around  w-full items-center text-sm h-16 border-solid border-2 border-red-100 rounded-xl" key={index}>
                  
                  <img className="w-12" src={item1} alt="" />
                  <li className="">{item2}</li>
                  <li>{item3}</li>
                  <li>{item4}</li>
                 
                </ul>
              </>
            );
        })}
        </div>
        </div>
        
      </div>
        <Outlet/>
      </Sidebar>
    </>
  )
}

export default Vendor
