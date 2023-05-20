import React from 'react'

const SettingsRider = () => {

    const VendorDataList = [
        {
          item1:
            "22 old aba road , market junction...... 22 old aba road , market junction......",
        },
        {
          item1:
            "22 old aba road , market junction...... 22 old aba road , market junction......",
        },
        {
          item1:
            "22 old aba road , market junction...... 22 old aba road , market junction......",
        },
        {
          item1:
            "22 old aba road , market junction...... 22 old aba road , market junction......",
        },
      ];
  return (
    <>
    <div className="flex flex-col gap-4 ">
    {VendorDataList &&
    VendorDataList.map((val, index) => {
        const { item1 } = val;
    
        return (
        <>
            <ul
            style={{ backgroundColor: "rgba(170, 74, 74, 0.1)" }}
            className="flex justify-around  w-full items-center text-sm h-16 border-solid border-2 border-red-100 rounded-xl"
            key={index}
            >
            <li>{item1}</li>
            </ul>
        </>
        );
    })}
    </div>
    </>
  )
}

export default SettingsRider
