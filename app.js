const express = require('express');
const process = require('process');
const app = express();

app.use(express.static('static'));

app.listen(process.env.PORT, () => console.log('started'));