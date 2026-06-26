import { configureStore } from "@reduxjs/toolkit";
import EmpReducer from "./EmpReducer"

const EmpStore = configureStore({
    reducer :{
        Emp:EmpReducer
    }
})

export default EmpStore;