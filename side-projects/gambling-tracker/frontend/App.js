import React from 'react';
import {render} from 'react-dom';
import store from "./store/store.js";
import {Router, Route, browserHistory,IndexRoute} from "react-router";
import {Provider} from "react-redux"
import Category from "./component/category.js"
import Players from "./component/player.js"
import AppContainer from "./middleware/app-container.js"
import playerContainer from "./middleware/player-container.js"
require("./App.css")


render(
  <Provider store={store}>
  	<Router history={browserHistory}>
  		<Route path="/" component={AppContainer}>
        <IndexRoute component={Category}/>
          <Route path="/players/:cata" component={playerContainer}/>
          
  		</Route>
  	</Router>
  </Provider>,
  document.getElementById('root')
);


