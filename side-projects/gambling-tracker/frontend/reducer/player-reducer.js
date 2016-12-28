const _defaultState = {
	players:[],
	number:0
}

const reducer = (state = _defaultState, action) => {
	switch(action.type){
		case "ADD_NAME":
			var output = Object.assign({}, state)
			output.players = action.names
			return output
		case "NUM" :
			var output = Object.assign({}, state)
			output.number = action.number
			return output
		default: 
			return state;
	}
}

export default reducer;