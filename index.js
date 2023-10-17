// import the server package
const express = require('express');

// make an instance of the server that we can customise and run
const app = express();

// this is an instance of the server as well (NOT RECCOMMENDED)
// const express = require('express')(); 

// localhost:3000/
// app.get(route path, callback function)
app.get("/", (request, response) => {

    response.send("Hello world, this server is bananas!");

	
})

// Configure the server -- Happens above this line ^^^^^^^^

// Activate the server -- Happens below this line vvvvvvvvvv

app.listen(3000, () => {
	console.log("Server is running on port: " + 3000);

	
})