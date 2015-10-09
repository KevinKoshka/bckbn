var app = app || {};

var TodoList = Backbone.Collection.extend({
	model : app.Todo,

	localStorage : new Backbone.LocalStorage('todos-backbone'),

	//Filtra la lista dejando unicamente los completados.
	completed : function () {
		return this.filter(function (todo) {
			return todo.get('completed');
		});
	},

	//Filtra la lista dejando unicamente los incompletos.
	remaining : function () {
		return this.without.apply(this, this.completed());
	},

	//Mantiene los todos en orden secuencial. Genera el próximo orden para nuevos items.
	nextOrder : function () {
		if (!this.length) {
			return 1;
		}
		return this.last().get('order') + 1;
	},
	
	comparator : function (todo) {
		return todo.get('order');
	}
});

app.Todos = new TodoList();