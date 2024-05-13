import { createSlice } from "@reduxjs/toolkit";
 const initialState={
  taskList:[
     {
    maSV:1,
    hoTen:'Duy',
    sdt:'0334491141',
    email:'duyp7484@gmail.com'
},
     {
    maSV:2,
    hoTen:'Duy',
    sdt:'0334491141',
    email:'duyp7484@gmail.com'
},
],
taskEdit:[ 

],
button:true,
 }
   
  ;
const StoreInput=createSlice({
    name:'storeInput',
    initialState,
  reducers:{
    themValues:(state,actions)=>{
        let index=state.taskList.findIndex((item)=>item.maSV===actions.payload.maSV)
        if(index !==-1){
          alert('Id da bi trung');
          return {...state}
        }
        state.taskList.push(actions.payload);

        return state
    },
    xoaValues:(state,actions) =>{
       let xoaItem= state.taskList.filter((item)=>!(item.maSV==actions.payload))
       return {...state,taskList:xoaItem}
    
    },
    editInput:(state,actions)=>{
      return {...state,taskEdit:actions.payload}
     
    },
    button:(state,actions)=>{
      return {...state,button:actions.payload}
    },
    updateInput:(state,actions)=>{
    
  console.log(actions.payload);

  state.taskEdit={...state.taskEdit,hoTen:actions.payload.hoTen}

      let taskListUpdate=[...state.taskList];
      console.log(taskListUpdate);
      let index=taskListUpdate.findIndex((item)=>item.maSV==actions.payload.maSV)
   
      if(index!==-1){
        taskListUpdate[index]=state.taskEdit;
        
      }
      console.log(index);
      state.taskList=taskListUpdate;
      return state
    }
   
    
  }
})

export const inputStore=StoreInput.reducer;
export const {themValues,xoaValues,editInput,button,updateInput}=StoreInput.actions
