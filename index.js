const express = require('express');
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const indexRouter=require('./routes/indexRouter.js');
const newMessageRouter=require('./routes/newMessage.js');

const app=express();

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use('/', indexRouter);
app.use('/new', newMessageRouter);
  
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`This is the mini message app - listening on ${PORT}!`);
});