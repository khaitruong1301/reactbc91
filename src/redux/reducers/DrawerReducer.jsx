//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: 'title drawer',
    contentComponent: <div>default</div>,
    handleSubmit: (value)=>{
        console.log('submit default')
    }
}
//state: string, bool, num, jsx, component, function


const DrawerReducer = createSlice({
  name: 'DrawerReducer',
  initialState,
  reducers: {
    changeContentDrawerAction: (state,action) =>{
        //Payload = {title, contentComponent}
        const {title,contentComponent} = action.payload;
        state.title = title;
        state.contentComponent = contentComponent;
    },
    changeFunctionSubmit: (state,action) => {
        //payload: function submit của form gửi từ component lên
        state.handleSubmit = action.payload;
    }
  }
});

export const {changeContentDrawerAction,changeFunctionSubmit} = DrawerReducer.actions

export default DrawerReducer.reducer