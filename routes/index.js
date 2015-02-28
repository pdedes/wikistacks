var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var models = require('../models/');

	var p = models.Page;
	var docs = p.find(function(err, data) {
		console.log(data);
		console.log(data.length);

		res.render('index', { title: 'BROWSE MY STACK',
	  	pages: data,
	  	// tags: data.tags.join(' ');
	  });
	});
	// console.log('Hell Yeah!');
	// res.redirect('/about_us');
});

router.get('/about_us', function(req, res, next) {
	res.render('about_us', {title: 'PETER'});
});

// router.get('/add_page', function(req, res, next) {
// 	res.render('add_page', {title: 'Add a New Page'});
// });

module.exports = router;