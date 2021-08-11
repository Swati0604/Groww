import { combineReducers } from "redux";
import { allBankReducer } from './allBankReducer';
import { favBankReducer } from "./favBankReducer";


const reducerModule = combineReducers({
    allBank: allBankReducer,
    favBank: favBankReducer,
})

export default reducerModule;