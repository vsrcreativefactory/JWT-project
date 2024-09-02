import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define the register async action using createAsyncThunk
export const register = createAsyncThunk(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
		const response = await fetch('http://localhost:8000/api/users/register', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		  });		  

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Initial state for user slice
const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  registered: false,
  error: null,
};

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetRegistered: state => {
      state.registered = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.registered = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Registration failed';
      });
  },
});

// Export the resetRegistered action
export const { resetRegistered } = userSlice.actions;

// Export the reducer to be included in the store
export default userSlice.reducer;
