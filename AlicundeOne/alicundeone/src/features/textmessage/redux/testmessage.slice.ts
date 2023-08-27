import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITextMessage } from "../../../app/core/textmessage.model";


interface IState {
    listMessage: ITextMessage[];
}

const InitialState:IState  = {
    listMessage: []
}

const textMessageSlice = createSlice({
    name:'textmessage', 
    initialState: InitialState,
    reducers : 
    {
        insertText: (state,action: PayloadAction<ITextMessage>) => {
            state.listMessage?.push(action.payload)
        },
        deleteText: (state, action: PayloadAction<ITextMessage>) => {
          state.listMessage =  state.listMessage?.filter(x=> x.text !== action.payload.text)
        }
    }
})

export const {insertText,deleteText } = textMessageSlice.actions;
export default textMessageSlice.reducer;