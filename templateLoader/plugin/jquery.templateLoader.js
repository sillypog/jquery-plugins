(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {
	$.extend({
		templateLoader: function(templates, ns){
			var i = 0,
				l = templates.length;
			for (i; i < l; i++){
				var t = templates[i];
					  
				// Create the hook on the namespace object so that the template can be referenced easily
				ns[t.toUpperCase()] = t;
				$.template(t, $('#'+t).remove().html());
			}
		}
	});		// Would be called as $.templateLoader([template],namespace);
}));