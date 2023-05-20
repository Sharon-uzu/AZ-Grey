import React from 'react'
import AdminInputs from '../../Components/InputComponent/AdminInputs/AdminInputs'

const AdminUser = () => {

  const UserDataList = [
    {
      item1: "DENNAR",
      item2: "PENDING",
      item3: "FRIED RICE",
      item4: "APR 22",
    },
    {
      item1: "DENNAR",
      item2: "DELIVERED",
      item3: "OKRA SOUP",
      item4: "APR 25",
    },
    {
      item1: "DENNAR",
      item2: "DELIVERED",
      item3: "SHARWAMA",
      item4: "APR 12",
    }
  ];

  return (
    <div>
      <AdminInputs 
        //Main Head
        headListClass="grid grid-cols-11 h-8 w-11/12 place-items-center"
        headListClass1="text-right col-span-2"
        headListClass2="col-span-2 text-center"
      
        headListClass4="col-span-2 text-right"
        itemListClass="w-7/12 flex justify-evenly"
        HideImage="hidden"
        //Main Head Titles
        firstTitle="NAME"
        secondTitle="STATUS"
        thirdTitle="ITEM"
        fourthTitle="DATE"
      DataList={UserDataList}/>
    </div>
  )
}

export default AdminUser
