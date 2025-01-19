const { Router } = require("express");
const indexRouter= Router(); 
const messageController = require("../controllers/messageController");

indexRouter.get("/", messageController.getAllMessages);
indexRouter.get("/new", messageController.messageCreateGetForm);
indexRouter.get("/message/:id", messageController.selectedMessageShow);

indexRouter.post('/new', (req,res)=> {
    messages.push({ id: crypto.randomUUID(), text: req.body.message, user: req.body.user, added: new Date() });
    res.redirect('/');
})

module.exports = indexRouter;