import {ActionTypes} from '../contants/action-types'

const initalState = {
    products:[]
}


export const productreducer = (state=initalState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS :
            return state    
        default:
            return state
    }
}