import { configureStore } from '@reduxjs/toolkit'
import adminReducer from "../Redux/Futures/AdminSlice"                                    
import riderReducer from "../Redux/Futures/RiderSlice"                                    
import userReducer from "../Redux/Futures/UserSlice"                                    
import vendorReducer from "../Redux/Futures/VendorSlice"                                    



const store = configureStore({
  reducer: {
    user: userReducer,
    vendor: vendorReducer,
    rider: riderReducer,
    admin: adminReducer,
  },
});

export default store;