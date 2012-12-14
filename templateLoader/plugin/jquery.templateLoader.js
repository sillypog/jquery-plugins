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
			templates.each(function(){
				var t = $(this),
					t_id = t.attr('id');
				ns[t_id.toUpperCase()] = t_id;
				$.template(t_id, t.remove().html());
			});
		}
	});		// Would be called as $.templateLoader([template],namespace);
}));