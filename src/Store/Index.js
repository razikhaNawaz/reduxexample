import { createStore } from "redux"

let initialState={
    counter1:0,
    counter2:100,
    hideF:false,
    hideS:true
    
}
const reducerFun=(state=initialState, action)=>{
    if(action.type==='INCREMENT'){
        return {
            ...state, counter1:state.counter1+5
        }
        
    }

    if(action.type==='DECREMENT'){
        return {
            ...state, counter2:state.counter2-5
        }
    }
    if(action.type==='RESET'){
        return {
            ...state, counter1:0,
            counter2:100
        }
    }
    if(action.type==='HIDE1'){
        return {
            ...state, hideF:!state.hideF
        }
    }
    if(action.type==='HIDE2'){
        return {
            ...state, hideS:!state.hideS
        }
    }
    if(action.type==='ALLHIDE'){
        return {
            ...state, hideF:false, hideS:false
        }
    }
    return state
}
const store=createStore(reducerFun)
export default store