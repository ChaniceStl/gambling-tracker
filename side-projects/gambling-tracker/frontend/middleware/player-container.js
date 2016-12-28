import Players from "../component/player.js";
import {connect} from "react-redux";

const playerContainer = state => ({
	players:state.players,
	number:state.number
})

export default connect(playerContainer)(Players);
