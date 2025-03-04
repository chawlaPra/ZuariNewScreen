import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuth: boolean;
  token: string;
  email: string;
  userType:"Super Admin" | "Admin" | undefined;
  _id: string;
};

const initialAuthState: AuthState = {
  isAuth: false,
  _id: "",
  userType: undefined,
  email: "",
  token: "",
};

export const auth = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logOut: () => initialAuthState,
    logIn: (state, action: PayloadAction<AuthState>) => {
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.isAuth = true;
      state.token = action.payload.token;
      state.userType = action.payload.userType
    },
  },
});

export const { logIn, logOut } = auth.actions;

const rootReducer = {
  auth: auth.reducer,
};

export default rootReducer;