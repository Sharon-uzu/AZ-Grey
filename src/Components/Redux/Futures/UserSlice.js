import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setLoading, setError } = userSlice.actions;

// Async action to sign up a user
export const signUp = (formData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    dispatch(setUser(data.user));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Async action to log in a user
export const logIn = (formData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    dispatch(setUser(data.user));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Async action to log out a user
export const logOut = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch('/api/users/logout', { method: 'POST' });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    dispatch(setUser(null));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Async action to fetch user data
export const fetchUserData = (userId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    dispatch(setUser(data.user));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default userSlice.reducer;
