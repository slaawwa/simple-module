// app.js
(function() {
	
	window.app = {
		init: function(data) {
			data = data? data: {};
			app.init.data = data;
			console.log( app.home.hello, data.data );
			var blocks = Object.keys( this );
			blocks = blocks.splice(1);
			console.info(blocks)
			blocks.forEach(function(e, i) {
			  console.log(i, e)
			  if (app[e].init && typeof(app[e].init) == 'function' ) {
			  	console.info('Call:', 'app.'+e+'.init')
			  	app[e].init(data[e]? data[e]: undefined);
			  } else {
			  	console.info('Not found:', 'app.'+e+'.init')
			  }
			});
		}
	};

})();
