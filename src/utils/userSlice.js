import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        theme:'light',
        userData:null,
    },
    reducers:{
        addUserData: (state,action)=>{
            state.userData = action.payload;
        },
        removeUserData: (state,action)=>{
            return {theme:'light',userData:null};
        },
        updateTheme: (state,action)=>{
            state.theme = action.payload;
        }
    }
});
export const {addUserData, removeUserData,updateTheme} = userSlice.actions;
export default userSlice.reducer;