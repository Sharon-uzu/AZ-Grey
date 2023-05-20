import React from 'react'
import AdminInputs from '../../Components/InputComponent/AdminInputs/AdminInputs'


const AdminRider = () => {

  

    const RiderDataList = [
      {
        item1: "DENNAR",
        item2: "22 OLD ABA ROAD, MARKET JUCNCTION",
        item3: "ROT2VV",
        item4: "ACTIVE",
      },  {
        item1: "DENNAR",
        item2: "22 OLD ABA ROAD, MARKET JUCNCTION",
        item3: "ROT2VV",
        item4: "ACTIVE",
      },  {
        item1: "DENNAR",
        item2: "22 OLD ABA ROAD, MARKET JUCNCTION",
        item3: "ROT2VV",
        item4: "ACTIVE",
      }
    ];

  return (
  <>
  <AdminInputs 
  //Main Head
  headListClass="grid grid-cols-11 h-8 w-11/12 items-center"
  headListClass1="text-right"
  headListClass2="col-span-4 text-center"
  headListClass3="col-span- text-left"
  headListClass4="col-span- text-center"
  itemListClass="w-8/12 flex justify-evenly"
  HideImage="hidden"
  //Main Head Titles

  firstTitle="NAME"
  secondTitle="CONTACT"
  thirdTitle="BIKE ID"
  fourthTitle="STATUS"
  DataList={RiderDataList}/>
  </>
  )
}

export default AdminRider
