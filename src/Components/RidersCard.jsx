import React from 'react'

const RidersCard = ({users}) => {
  return (
    <>
      <div className="w-11/12 bg-white mx-auto border-solid border-2 rounded-3xl flex h-32 justify-center items-center ">
                <div className="w-1/2 flex flex-col justify-evenly  h-20 text-2xl">
                  <ul className="flex h-2/5 gap-4">
                    <li>{users.icon1}</li>
                    <li className="text-sm">{users.firstText}</li>
                  </ul>
                  <ul className="flex h-2/5 gap-4">
                    <li>{users.icon2}</li>
                    <li className="text-sm">{users.secondText}</li>
                  </ul>
                </div>
                <div className="flex justify-center items-center w-2/5 text-sm  h-20">
                  <span>View Meal</span>
                </div>
              </div>
    </>
  )
}

export default RidersCard
