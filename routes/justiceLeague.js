const express = require('express');
const router = express.Router();
const justiceLeagueArray = require('../models/justiceLeague');

router.get('/', function(req, res) {
	res.render('./justiceLeague/index', {
		justiceLeagueData: justiceLeagueArray,
		documentTitle: 'List of Justice League members'
	});
});

router.get('/:id', function(req, res){
	for (let i = 0; i < justiceLeagueArray.length; i++) {
		if (justiceLeagueArray[i].id == req.params.id) {
			res.render('./justiceLeague/show-single'), {
			}
		};
	};
	res.send('Error: 404 Page not found')
});

module.exports = router;