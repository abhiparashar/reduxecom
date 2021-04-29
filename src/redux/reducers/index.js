import {combineReducers} from 'redux'
import {productreducer,selectproductreducer,removeselectproductreducer} from './productReducer'

 const reducer = combineReducers({
    allProducts:productreducer,
    product:selectproductreducer,
})

export default reducer

