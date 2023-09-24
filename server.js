const express = require('express');
const path = require('path');
const app = express();
const { handleLogEvent } = require(path.join(__dirname, 'middleware', 'loggingUtility.js'));

const PORT = 9000;
app.use((req, res, next) => {
    handleLogEvent(`${req.method}\t${req.headers.origin}\t${req.url}`);
    next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(
    PORT,
    () => console.log(`Running on port ${PORT}`)
);