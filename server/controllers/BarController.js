var express = require('express'),
	router = express.Router(),
	Bar = require('../models/Bar')
	User = require('../models/User'),
	bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

//GET request to /bar/search
router.get('/search', function(request, response){
	if(request.session.loggedIn === true){
		response.render('search')
	}else{
		response.redirect('/')
	}
})

//GET request to /bar/assignment
router.get('/:id', function(request, response){
	if(request.session.loggedIn === true){
		// var bar = 

		response.render('assignment')
	}else{
		response.redirect('/')
	}
})

module.exports= router;