var express = require('express');
var router = express.Router();

/* GET users listing. */
//The route here is 'relative' meaning that we are pointing to the 'root' of the 'add' section
router.get('/:name', function(req, res, next) {
  var models = require('../models/');

  var p = models.Page;
  var query = p.findOne({'url_name': req.params.name}, function(err, data) {

    res.render('wiki_entry', { title: data.title,
      content: data.body,
      tags: data.tags.join(' ')
    });
  });
  

  // res.render('wiki_entry', {title: 'Voila', content: 'Ahh Tea!'});
});

module.exports = router;
