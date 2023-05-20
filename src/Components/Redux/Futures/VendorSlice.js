import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  vendor: null,
  orders: [],
  loading: false,
  error: null,
};

export const vendorSlice = createSlice({
  name: 'vendor',
  initialState,
  reducers: {
    setVendor: (state, action) => {
      state.vendor = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setVendor, setOrders, setLoading, setError } = vendorSlice.actions;

// Async action to get vendor data
export const fetchVendorData = (vendorId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`/api/vendors/${vendorId}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    dispatch(setVendor(data.vendor));
    dispatch(setOrders(data.orders));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Async action to update vendor data
export const updateVendorData = (vendorId, formData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`/api/vendors/${vendorId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    dispatch(setVendor(data.vendor));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Async action to get vendor's order details
export const fetchOrderDetails = (orderId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`/api/orders/${orderId}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    dispatch(setOrders(data.orders));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default vendorSlice.reducer;
