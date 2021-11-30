const logger = require('./logger');
const express = require('express')


logger.log('message');

const app = express()
const port = 8080



app.listen(port, () => {
    console.log(`Example app listening at http://flocalhost:${port}`);
})