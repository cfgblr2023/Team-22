import { createSlice } from "@reduxjs/toolkit";
var name="";
var id="";
var email="";
var type='';
try
{
    var x=JSON.parse(window.localStorage.getItem('name'));
    var y=JSON.parse(window.localStorage.getItem('id'));
    var em = JSON.parse(window.localStorage.getItem('email'));
    var z = JSON.parse(window.localStorage.getItem('type'));
    if(x)
    {
      name=x;
    }
    if(y)
    {
      id=y;
    }
    if(z)
    {
      type=z;
    }
    if(em)
    {
      email=em;
    }
}catch(e){
    console.log(e);
}
const initialState = {
  name: name,
  id: id,
  email:email,
  type:type,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      localStorage.setItem('id',JSON.stringify(action.payload.id));
      localStorage.setItem('name',JSON.stringify(action.payload.name));
      localStorage.setItem('email',JSON.stringify(action.payload.email));
      localStorage.setItem('type',JSON.stringify(action.payload.type));
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.email= action.payload.email;
      state.type=action.payload.type
    },

    setSignOutState: (state) => {
      localStorage.setItem('id',"");
      localStorage.setItem('name',"");
      localStorage.setItem('email',"");
      localStorage.setItem('type','')
      state.name = null;
      state.id = null;
      state.type = null;
    },

    setMessages: (state, action) => {
    //   console.log(state.name, state.email, state.photo, state.text);
    //   state.text=action.payload.text;
    //   console.log(state.name, state.email, state.photo, state.text);
      
    },
  },
});

export const { setUserLoginDetails, setSignOutState, setMessages } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserId = (state) => state.user.id;
export const selectText = (state) => state.user.text;
export const selectEmail = (state)=> state.user.email;
export const selectType = (state)=> state.user.type;

export default userSlice.reducer;