import React from "react";

const AdminInputs = (props) => {

  return (
    <>
      <div className="w-11/12 ml-20 mt-8">
        <div className="w-11/12 mx-auto">
        <div style={{background:"hsla(0, 2%, 95%, 1)"}} className="w-full h-12 mb-4 flex items-center border-solid border-2 border-gray-200 rounded-xl ">
          <ul  className={props.headListClass}>
            <li className={props.headListClass1}>{props.firstTitle}</li>
            <li className={props.headListClass2}>{props.secondTitle}</li>
            <li className={props.headListClass3}>{props.thirdTitle}</li>
            <li className={props.headListClass4}>{props.fourthTitle}</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
        {props.DataList &&
          props.DataList.map((val,index) => {
            const {item1,item2,item3,item4} = val
         
            return (
              <>
                <ul style={{backgroundColor: "rgba(170, 74, 74, 0.1)"}} 
                className="flex justify-between items-center text-sm h-16 border-solid border-2 border-red-100 rounded-xl" key={index}>
                  <div className={props.itemListClass}>
                  <li className={props.HideText}>{item1}</li>
                  <li><img className={props.HideImage} src={item1} alt="" /></li>
                  <li className="">{item2}</li>
                  <li>{item3}</li>
                  <li>{item4}</li>
                  </div>
                  <div className="flex justify-evenly w-2/5">
                    <button>T</button>
                    <button>Disable</button>
                    <button>Delete</button>
                  </div>
                </ul>
              </>
            );
        })}
        </div>
        </div>
        
      </div>
    </>
  );
};

export default AdminInputs;
