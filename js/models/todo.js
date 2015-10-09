var app = app || {};

app.Todo = Backbone.Model.extend({
	defaults : {
		title     : '',
		completed : false
	},

	//Setea y persiste simultaneamente.
	toggle   : function () {
		this.save({
			completed : !this.get('completed');
		});
	}
});