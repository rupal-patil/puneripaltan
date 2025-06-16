
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosHttp from "@/lib/utils/axiosinterceptor";

export const getPlayers=createAsyncThunk("add-players", async()=>{
    try{
        const response=await axiosHttp.get("/category_list");
        const {data,headers}=response;
        const contentType=headers["Content-Type"];
        return {data,contentType};
    }catch(err){
        throw err
    }
})

const initialState={
    players:[],
    status:"Idle",
    
}

const playersSlice=createSlice({
    name:"players",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getPlayers.pending,(state)=>{
            state.status="loading"
        })
        .addCase(getPlayers.fulfilled,(state,action)=>{
            state.status="fetched",
            state.players=action.payload.data
        })
        .addCase(getPlayers.rejected,(state)=>{
            state.status="rejected"
        })
        
    }
});

export const playersActions=playersSlice.actions;
const playersReducer=playersSlice.reducer;
export default playersReducer;
