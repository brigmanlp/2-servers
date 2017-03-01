// We require/import the HTTP module
var http = require("http");

//Define the ports we want to listen to
var PORTONE = 7000;
var PORTTWO = 7500;

// Create two separate functions to handle requests, one for each server.
function handleRequestOne(request, response) {
    response.end("You're a Full-stack coding wizard!");
}

function handleRequestTwo(request, response) {
    response.end("You are not the brightest crayon in the box.");
}

//Create a server for each one
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// Starting our servers
serverOne.listen(PORTONE, function() {

    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function() {

    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORTTWO);
});