const express = require('express');
const router = express.Router();
const avengersArray = require('../models/avengers');

router.get('/', function(req, res) {
	res.render('./avengers/index', {
		avengersData: avengersArray,
		documentTitle: 'List of Avengers'
	});
});

// router.get('/', function(req, res){
// 	res.send(avengersArray);
// });

router.get('/:id', function(req, res){
	for (let i = 0; i < avengersArray.length; i++) {
		if (avengersArray[i].id == req.params.id) {
			res.render('./avengers/show-single'), {
			}
		};
	};
	res.send('Error: 404 Page not found')
});

module.exports = router;