import React from "react";
import Sidebar from "../../Components/SideBar";
import { Outlet } from "react-router";
import { MainHeaderBar } from "../../Components/HeaderBar";
import MenuItem from "../../Components/MenuItem";
import Harmburger from "../../Components/harmburger";
import { HarmburgerData } from "../../Components/MenuItem";
const Rider = () => { 

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <>
      <Sidebar pageNum={1} menuItem={MenuItem}>
        <MainHeaderBar btnText="Print" 
        />
        <div className=" md:w-11/12 md:ml-20 mt-8">
        <Harmburger HarmburgerData={HarmburgerData} pageNum={0}
        toggle={toggle} isOpen={isOpen}
        harbClassName={`${isOpen ? "w-2/5" : "w-0"} absolute md:hidden bg-red-300 top-0 bottom-0  flex flex-col justity-between text-lg`}/>
        </div>
      </Sidebar>
          <Outlet />
    </>
  );
};

export default Rider;
