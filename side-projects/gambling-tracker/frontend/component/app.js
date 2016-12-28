import React from "react";
import Footer from "./footer.js";


var App = React.createClass({
  render: function() {
    return (
      <div className="site-container">
     	 <div className="nav-container"></div>
       	<div className="body-container">
       		<h1>The Logistics</h1>
        	{this.props.children}
        </div>
        	<Footer />
      </div>
    )
  }
})

export default App;