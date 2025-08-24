const express = require('express');
const cors = require('cors');

const server = express();

console.log('Starting up TidyTasks API');

console.log('Configuring CORS');
const options = {
    origin: 'http://tidytasks.local.com:8080',
};
server.use(cors(options));

// Start the webserver, listening on port 4040 (may change later)
server.listen(4040, () => {
    console.log('TidyTasks API has started on port 4040')
})

// Listener for /helloworld endpoint
server.get('/helloworld', (req, res) => {
    res.send('Hello from TidyTasks API')
})

server.get('/cors', (req, res) => {
    //res.set('Access-Control-Allow-Origin', 'http://tidytasks.local.com');
    //res.set('Access-Control-Allow-Methods', 'GET');
    res.send('Response from CORS test');
});