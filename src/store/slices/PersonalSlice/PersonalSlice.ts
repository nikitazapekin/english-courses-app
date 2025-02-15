import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

interface User {
    id: number,
    email: string,
    auth_date: string,
    user_id: number,
    courses: string,
    phone: string,
    country: string,
    city: string,
    role: string,
    username: string,
    describtion: string | null | "Добавьте описание..."
}
interface PersonalSliceTypes {
    message: string
    user: User,
    loading: boolean,
    error: null | string
}
const initialState: PersonalSliceTypes = {
    message: "",
    user: {
        id: 0,
        email: "",
        auth_date: "",
        user_id: 0,
        courses: "",
        phone: "",
        country: "",
        city: "",
        role: "",
        username: "",
        describtion:  "Добавьте описание..."
    },
    loading: false,
    error: null
};
const PersonalSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
       
        setPerson(state, action: PayloadAction<User>) {
            state.user = action.payload

            console.log(state.user)
        }

    },


});

export const {  // setOpenFilters, setChangeFilters, setSelectedDate

    setPerson
} = PersonalSlice.actions;
export default PersonalSlice.reducer;
/* import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      return response.data;  
    } catch (err: any) {
      
      return rejectWithValue(err.response?.data || 'Something went wrong');
    }
  }
);
 
interface UserState {
  message: string;
  user: {
    id: number;
    email: string;
    auth_date: string;
    user_id: number;
    courses: string;
    phone: string;
    country: string;
    city: string;
    role: string;
  };
  loading: boolean;
  error: null | string;
}
 
const initialState: UserState = {
  message: '',
  user: {
    id: 0,
    email: '',
    auth_date: '',
    user_id: 0,
    courses: '',
    phone: '',
    country: '',
    city: '',
    role: '',
  },
  loading: false,
  error: null,
};
 
const personalSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
    
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;  
      })
     
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;  
      });
  },
});

export default personalSlice.reducer;

/* import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async (userId: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/api/users/${userId}`);
            return response.data;
        } catch (err) {

        }
    }
);

interface ResponseProps {

    message: string
    user: {
        id: 1,
        email: string,
        auth_date: string,
        user_id: number,
        courses: string,
        phone: string,
        country: string,
        city: string,
        role: string
    },
    loading: boolean,
    error: null | string

}
const userSlice: ResponseProps = createSlice({
    message: "",
    user: {
        id: 0,
        email: "",
        auth_date: "",
        user_id: 0,
        courses: "",
        phone: "",
        country: "",
        city: "",
        role: ""
    },
    loading: false,
    error: null
},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.loading = false;

            });
    },
});

export default userSlice.reducer;
 */ 