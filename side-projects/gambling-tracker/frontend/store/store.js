import {createStore} from "redux"
import reducer from "../reducer/player-reducer.js"

const store = createStore(reducer);


export default store;