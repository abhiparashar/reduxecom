import {combineReducers} from 'redux'
import {productreducer} from './productReducer'

 const reducer = combineReducers({
    allProducts:productreducer
})

export default reducer

