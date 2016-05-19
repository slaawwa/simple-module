var static = require('node-static');
 
// 
// Create a node-static server instance to serve the './public' folder 
// 

console.log('PARENT: ', module.parent? true: false);

var file = new static.Server('./client/dist');
function start() {
	 
	require('http').createServer(function (request, response) {
	    request.addListener('end', function () {
	        // 
	        // Serve files! 
	        // 
	        file.serve(request, response, function(err, result) {
	        	if (err) { // There was an error serving the file 
	                console.error("Error serving " + request.url + " - " + err.message);
	 
	                // Respond to the client 
	                response.writeHead(err.status, err.headers);
	                response.end();
	            } else {
	        		console.log(request.method, request.url);
	            }
	        });
	    }).resume();
	}).listen(2929);
}

if (module.parent) {
	module.exports.start = start;
} else {
	start();
}
