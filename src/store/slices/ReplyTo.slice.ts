import { createSlice, PayloadAction } from '@reduxjs/toolkit';
 

import { HomepageSliceTypes, ReplyProps } from './types';
import { stat } from 'fs';
const initialState: ReplyProps = {
  //  isOpenBurger: false

  
    userId: 0,
    username: "", 
    comment: "",  
    date: "", 
    avatar: "", 
    likes: 0,  
    isYourComment: true,  
    to: "",
    commentId: 1
 
};
const ReplyToSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {

        
    /*    setOpenBurger(state, action: PayloadAction<boolean>) {
            console.log(action.payload)
            state.isOpenBurger = action.payload
        } */
setReply(state, action: PayloadAction<ReplyProps>) {
state.avatar = action.payload.avatar
state.userId= action.payload.userId
state.username = action.payload.username
state.comment = action.payload.comment
state.date = action.payload.date
state.likes = action.payload.likes
state.isYourComment = action.payload.isYourComment
state.to = action.payload.to
state.commentId = action.payload.commentId
}
    },
});
export const {
  //  setOpenBurger
  setReply
} = ReplyToSlice.actions;
export default ReplyToSlice.reducer; 