const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const db = require('./backend/models')
var debug = require('debug')('SEQUELIZE')

debug("%0", db.Player)

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())


//front end To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

app.use(express.static(path.join(__dirname, './frontend/public')))


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/frontend/index.html'))
})

db.sequelize.sync().then(()=>{
	app.listen(3000, ()=>{
		console.log('Server is up and runnning on http://localhost:3000/');
	})
})

