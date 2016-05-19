// some.js
(function() {

	app.some = {
		hello: 'Hello, ',
		init: function(data) {
			app.some.hello += data.name? data.name: 'UNKNOWN';
			console.info(' -- init SOME');
			console.log('data', data)
		}
	};

})();