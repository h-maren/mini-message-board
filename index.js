const express = require('express');
const path = require("node:path");
const assetsPath = path.join(__dirname, "/public");
const indexRouter=require('./routes/indexRouter.js');

const app=express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);


const PORT = 3000;
app.listen(PORT, '0.0.0.0' () => {
    console.log(`This is the mini message app - listening on ${PORT}!`);
});