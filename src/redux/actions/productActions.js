import {ActionTypes} from '../contants/action-types'

export const setProducts = (products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        paylaod:products,
    }
}

export const selectetedProduct = (product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        paylaod:product,
    }
}

export const removeSelectetedProduct = (product)=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        paylaod:product,
    }
}

