import React from "react"
import {Link} from "react-router"

const  Category = React.createClass({ 
	render:function(){
		return(
	
	<div className="site-container">
		<center>
		<img height="225" width="225" alt="Blackjack" src={"http://orig02.deviantart.net/2f24/f/2013/227/e/b/10dy693_by_bigbangisvipuw-d6ibf1c.png"}/>
		<img height="225" width="225" alt="Spades" src={"http://freevector.co/wp-content/uploads/2014/08/1438-symbol-of-spades5.png"}/>
		<img height="225" width="225" alt="Hearts" src={'http://www.clipartbest.com/cliparts/RcG/G4r/RcGG4rA4i.png'}/><br />
			
		<Link to={"/players/boureé"}><img  height="225" width="225" alt="Boureé" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/French_suits.svg/2000px-French_suits.svg.png"}></img></Link>
		<img height="225" width="225" alt="poker" src={"http://vectorlogofree.com/wp-content/uploads/2013/06/world-series-of-poker-vector-logo-400x400.png"}/>
		</center>
	</div>
		)
	}
})

export default Category;

//if the category name === the params link the login in page to have that data 