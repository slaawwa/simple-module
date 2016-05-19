// home.js
(function() {

	app.home = {
		el: {
			mybtn: $('#mybtn')
		},
		hello: 'Hello, world',
		getSomeHello: function() {
			alert(app.some.hello);
		},
		init: function(data) {
			console.info(' -- init HOME');
			console.log('data', data);

			app.home.el.mybtn.click(function() {
				app.home.getSomeHello();
			})
		}
	};

})();