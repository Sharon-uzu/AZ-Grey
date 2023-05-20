import React from 'react'
import SideBar from '../../Components/SideBar'
import {Outlet} from "react-router-dom"
import {MainHeaderBar} from "../../Components/HeaderBar"
import MenuItem from "../../Components/MenuItem"


const Admin = () => {

  return (
    <>
    
    <SideBar pageNum={0} display="flex" menuItem={MenuItem}>
      <MainHeaderBar btnState="hidden" headTitle="ADMIN DASHBOARD"/>
    <Outlet/>
    </SideBar>
    </>
  )
}

export default Admin

