import React from "react"; 
import Boureé from "./bouree.js"
import store from "../store/store.js"
import {addName,number} from "../action/action.js"



const Players = React.createClass({
 useNum(){
		var num = [0,1,2,3,4,5,6,7,8,9,10]
		return num.map((a,idx) =>	(<option key={idx}>{a}</option>))
	},

 handleSelectChange(event){
		let selected = event.target.value
		store.dispatch.bind(this, number(parseInt(selected)))()
	},
 createInputs(){
 		var arr = []
 	for(var i = 0; i< this.props.number; i++){		
	arr.push(<div key={i}> 
						Username:<input className="playersname" type="text" name="name"/><br />
					 </div>)
 	}
 	return arr
 },
 
 inputName(event){
 	event.preventDefault()
 	// how we get the names from the text box dynamic
 	let players = document.getElementsByClassName("playersname")
 	console.log(players)

 	let playerArray = Array.prototype.map.call(players, a => (a.value))  
 	
 	console.log(playerArray)
 	store.dispatch(addName(playerArray))
 },
	
	render(){
		var arr = []
	if(this.props.params.cata === "boureé"){
		arr.push(<Boureé key={"key"} cata="boureé"/>)
	}
	console.log("props players", this.props.players)
	console.log(this.props)
   	return(
			<div className="site-container">
				{arr}
				<form >
					How Many Players:
					<select required onChange={this.handleSelectChange}>
					 {this.useNum()}
					</select><br/>
					{this.props.number ? this.createInputs() : null}
					<button onClick={this.inputName}>Submit</button>
				</form>		
			</div>
			)
		}
	})
	

export default Players;