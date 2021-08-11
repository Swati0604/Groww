import { createStore } from "redux";
import reducerModule from './reducerModule';

const store = createStore(reducerModule, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

export default store;