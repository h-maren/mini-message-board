const { Router } = require("express");
const newMessageRouter= Router();

newMessageRouter.get("/", (req, res) => {
    res.render('form',{message,user});
});
  
module.exports = newMessageRouter;