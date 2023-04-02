import {combineReducers} from "@reduxjs/toolkit";
import orderReducer from "./slices/orderSlice/orderSlice";
import formReducer from "./slices/formSlice/formSlice";

const rootReducer = combineReducers({
    order: orderReducer,
    form: formReducer
})

export default rootReducer
