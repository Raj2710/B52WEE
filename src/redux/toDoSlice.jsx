import { createSlice } from '@reduxjs/toolkit'

const findIndex = (array,id)=>{
    for(let i = 0; i<array.length;i++)
    {
        if(array[i].id===id)
            return i
    }
    return -1
}

export const toDoSlice = createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        create:(state,action)=>{
            action.payload.id = state.length?state[state.length-1].id+1:1
            action.payload.status = false
            //Immutablity will be take care by redux
            state.push(action.payload)
        },
        toggle:(state,action)=>{
            let index = findIndex(state,action.payload.id)
            state[index].status = !state[index].status
        },
        deleteTodo:(state,action)=>{
            let index = findIndex(state,action.payload.id)
            state.splice(index,1)
        }
    }
})

export const {create,toggle,deleteTodo} = toDoSlice.actions

export default toDoSlice.reducer