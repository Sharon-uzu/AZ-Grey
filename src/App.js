// import SideBar from './Components/SideBar';
import "./App.css";
import Landing from "./Screens/Landing";
import { Route, Routes } from "react-router-dom";
import Order from "./Screens/Order";
import Rider from "./pages/Rider/Rider";
import Vendor from "./pages/Vendor/Vendor";
import Admin from "./pages/Admin/Admin";
import AdminVendor from "./pages/Admin/AdminVendor";
import AdminRider from "./pages/Admin/AdminRider";
import AdminUser from "./pages/Admin/AdminUser";

import OrderR from "./Components/OrderR"
import Stores from './Screens/Stores'
import Store1 from "./Screens/Store1";
import Store2 from "./Screens/Store2";

import store from "../src/Components/Redux/store";
import { Provider } from "react-redux";
import SettingsRider from "./pages/Rider/SettingsRider";
import MainRiderHomePage from "./pages/Rider/HomePage/MainRiderHomePage";
import VendorsHomePage from "./pages/Rider/HomePage/VendorsHomePage";
import ArriveLocation from "./pages/Rider/ArriveLocation";
import PickUpOrder from "./pages/Rider/HomePage/PickUpOrder";
import ReachedDropLocation from "./pages/Rider/ArriveLocation"
import AppContextProvider from "./Context/AppContext";

function App() {
  return (
    <>
    <AppContextProvider>
      <Provider store={store}>
        <Routes>

          <Route path='/' element={<Landing />} />
          < Route path="/Vendor" element={<Vendor />} />

          <Route path='/Order' element={<Order />} />
          <Route path="/OrderR" element={<OrderR />} />
          <Route path="/OrderR/Stores" element={<Stores />} />
          <Route path="/OrderR/Store1" element={<Store1 />} />
          <Route path="/OrderR/Store2" element={<Store2 />} />

          <Route path="/Admin" element={<Admin />}>
            <Route path="/Admin/AdminVendor" element={<AdminVendor />} />
            <Route path="/Admin/AdminRider" element={<AdminRider />} />
            <Route path="/Admin/AdminUser" element={<AdminUser />} />
          </Route>


          <Route path="/Rider" element={<Rider />}>
            <Route path="/Rider/Home" element={<MainRiderHomePage/>} />
            <Route path="/Rider/Home/VendorsPage" element={<VendorsHomePage/>} />
            <Route path="/Rider/Home/ArrivedLocation" element={<ArriveLocation/>}/>
            <Route path="/Rider/Home/PickUpOrder" element={<PickUpOrder/>} />
            <Route path="/Rider/Home/ReachedDropLocation" element={<ReachedDropLocation/>} />
            <Route path="/Rider/Settings" element={<SettingsRider />} />
          </Route>

        </Routes>
      </Provider>
    </AppContextProvider>
    </>
  );
}

export default App;
