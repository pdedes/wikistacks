var express = require('express');
var router = express.Router();

/* GET users listing. */
//The route here is 'relative' meaning that we are pointing to the 'root' of the 'add' section
router.get('/', function(req, res, next) {
  res.render('add_page', {title: 'Add a New Page'});
});

router.post('/submit', function (req, res) {
	var models = require('../models/');

  	// STUDENT ASSIGNMENT:
  	// add definitions of the `title`, `body` and `url_name` variables here
  	var title = req.body.pageTitle;
  	var body = req.body.pageControl;
  	var url_name = req.body.pageTitle;
  	var tags = req.body.pageTags.split(' ');


  	var p = new models.Page({ "title": title, "body":body, "url_name":url_name, "tags": tags});
  	p.save();
	console.log(req.body);
  	res.redirect('/');

	//The submit button needs to capture the form text
	//we need to capture the text from the form
	//add to the database
	//redirect to the Wikistacks ('/') page


})

module.exports = router;
