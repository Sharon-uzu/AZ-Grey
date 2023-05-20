import React from 'react'
import AdminInputs from '../../Components/InputComponent/AdminInputs/AdminInputs'
import Genesis from "../../../src/assets/gen16.png"
import Kilimanjaro from "../../assets/pz17.png"
import Chicken from "../../assets/chicken18.png"

const AdminVendor = () => {

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
    <div>
      <AdminInputs
      //Main Head
        headListClass="grid grid-cols-11 h-8 w-11/12 place-items-center"
        headListClass1="text-right col-span-2"
        headListClass2="col-span-1 text-center"
        headListClass3="col-span-3"
        headListClass4="col-span- text-right"
        itemListClass="w-8/12 flex  justify-around items-center "
        HideText="hidden"
        HideImage="w-12"
      //Main Head Titles
        firstTitle="LOGO"
        secondTitle="NAME"
        thirdTitle="LOCATION"
        fourthTitle="STATUS"
       DataList={VendorDataList}/>
    </div>
  )
}

export default AdminVendor

