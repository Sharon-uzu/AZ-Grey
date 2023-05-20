import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rider: null,
  orders: [],
  loading: false,
  error: null,
};

export const riderSlice = createSlice({
  name: 'rider',
  initialState,
  reducers: {
    setRider: (state, action) => {
      state.rider = action.payload;
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

export const { setRider, setOrders, setLoading, setError } = riderSlice.actions;

// Async action to get rider data
export const fetchRiderData = (riderId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`/api/riders/${riderId}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    dispatch(setRider(data.rider));
    dispatch(setOrders(data.orders));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Async action to update rider data
export const updateRiderData = (riderId, formData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`/api/riders/${riderId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    dispatch(setRider(data.rider));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Async action to get rider's order details
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

// Async action to update order status
export const updateOrderStatus = (orderId, status) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`/api/orders/${orderId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
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

export default riderSlice.reducer;
