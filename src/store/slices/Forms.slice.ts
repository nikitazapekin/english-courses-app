import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { countries } from "./consts";
interface FormTypes {
  name: string;
  email: string;
  password: string;
  age: number;
  gender: string;
  country: string;
  agreeToTerms: boolean;
  confirmPassword: string;
  avatar: string;
} 
interface AppState {
  countries: string[];
  reactHookForm: FormTypes;
  uncontrolledForm: FormTypes;
  
 // history: FormTypes[];
}

export const initialState: AppState = {
  countries: countries,
  reactHookForm: {
    name: "",
    age: 0,
    email: "",
    password: "",
    confirmPassword: "",
    gender: "None",
    avatar: "",
    agreeToTerms: false,
    country: "",
  },
  uncontrolledForm: {
    name: "",
    age: 0,
    email: "",
    password: "",
    confirmPassword: "",
    gender: "None",
    avatar: "",
    agreeToTerms: false,
    country: "",
  },
 
  //history: [],
};
const FormSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPersonalDataReactHookForm(state, action: PayloadAction<FormTypes>) {
  //    state.history.push(state.reactHookForm);
      state.reactHookForm = action.payload;
    },
   
  },
});
export const { setPersonalDataReactHookForm  } =
  FormSlice.actions;
export default FormSlice.reducer;