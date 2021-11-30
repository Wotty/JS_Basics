'use strict';

const express = require('express');
const app = express()


app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
app.set("view engine", "ejs");


// app.get('/', (req, res) => {
//     console.log('Hello World!');
//     res.render("index", { name: "Will" });
// })

const userRouter = require('./routes/users')
app.use('/users', userRouter)




app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);