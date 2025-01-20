const { Router } = require("express");
const indexRouter= Router(); 
const messageController = require("../controllers/messageController");

indexRouter.get("/", messageController.getAllMessages);
indexRouter.get("/new", messageController.messageCreateGetForm);
indexRouter.get("/message/:id", messageController.selectedMessageShow);

indexRouter.post('/new',messageController.addMessage);

module.exports = indexRouter;