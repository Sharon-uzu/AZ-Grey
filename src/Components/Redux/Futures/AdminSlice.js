import { createSlice } from '@reduxjs/toolkit';
import { fetchVendorData } from './VendorSlice';
import { fetchRiderData } from './RiderSlice';
import { fetchUserData } from './UserSlice';

const initialState = {
  vendorData: null,
  riderData: null,
  userData: null,
  loading: false,
  error: null,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setVendorData: (state, action) => {
      state.vendorData = action.payload;
    },
    setRiderData: (state, action) => {
      state.riderData = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setVendorData, setRiderData, setUserData, setLoading, setError } = adminSlice.actions;

// Async action to fetch all data
export const fetchAllData = (vendorId, riderId, userId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const vendorData = await dispatch(fetchVendorData(vendorId));
    const riderData = await dispatch(fetchRiderData(riderId));
    const userData = await dispatch(fetchUserData(userId));
    dispatch(setVendorData(vendorData.payload.vendor));
    dispatch(setRiderData(riderData.payload.rider));
    dispatch(setUserData(userData.payload.user));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default adminSlice.reducer;
