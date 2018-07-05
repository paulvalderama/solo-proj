const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const PORT = 8020; 


//Mongodb is a NoSql database which stores data, is also the native driver for interacting with  mongodb instance
//mongoose is an object modeling tool for MongoDB. It is built upon the MongoDB driverto provide programmers
//with a way to to model their data. Mongoose : define the schema, a lot more convenience in creation and management of Data
//connecting to mongo db database
mongoose.connect('mongodb://pvalderama:gopv2018@ds125841.mlab.com:25841/proj', () => console.log('mongoose here!'))

//giving access to build folder that contains the static files like html/css 

//Node is a platform for building server=side event-driven i/o application using js
//express is a framework based on Node.js for ubilding web application using principles and approaches of Node.js
app.use(express.static(path.join(__dirname, "build")));


//listening for requests, GET or POST, to the route of home '/', responds by sending the index.html file back to client('/' home page)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})  




//Binds the server and listens for connections on the specified host and port.
app.listen(PORT, () => console.log('listening on ...', PORT));