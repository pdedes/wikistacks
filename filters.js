module.exports = function(swig) {
	var page_link = function(doc) {
		var link_name;
		if (typeof doc.title !== "undefined" && doc.title !== "") {
      		link_name = doc.title;
    	} else {
      		link_name = "Page "+doc.url_name;
	    }

	    console.log(doc.full_route);

    	return "<a href='"+doc.full_route+"'>"+link_name+"</a>";
  	};
	page_link.safe = true;

	var mark_Down = function(string) {
		var marked = require('marked');
		console.log(string);
		return marked(string);
		// Ensure you return something from the filter
	}
	mark_Down.safe = true;

	swig.setFilter('page_link', page_link);
	swig.setFilter('mark_Down', mark_Down);
};