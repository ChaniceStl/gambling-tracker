import App from "../component/app.js";
import {connect} from "react-redux";
console.log(App)

const appContainer = state => ({
	number:state.number
})

export default connect(appContainer)(App);

