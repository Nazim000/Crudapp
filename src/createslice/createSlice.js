import { createSlice,current } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'user',
    initialState: {
        user:[],
        searchValue:''
    },
    reducers: {
        addreducer: (state, action) => {
            state.user.push(action.payload);
        },
        removereducer: (state, action) => {


            state.user.splice(action.payload, 1)
        },
       inputreducer: (state, action) => {
      state.searchValue=action.payload

            
        },
        editreducer: (state, action) => {
            const {id,title,message}=action.payload;
            const extinguser=state.user.find((item)=>item.id===id)
            // console.log(current(extinguser))
            if(extinguser){
                extinguser.title=title  ;
                extinguser.message=message
            }

            
        }
    }
})
export default slice.reducer;
export const { addreducer, removereducer,editreducer,inputreducer } = slice.actions;