const { Router } = require("express");
const indexRouter= Router(); 
const messageController = require("../controllers/messageController");

indexRouter.get("/", messageController.getAllMessages);

indexRouter.get("/new", (req, res) => {
    res.render('form', {title: "Submit New Message"});
});

indexRouter.get("/message/:id", (req, res) => {
  const messageID=req.params.id;
  const selectedMessage=messages.find(message =>message.id===messageID);
  res.render('message', {title: "Message Details", message: selectedMessage});
});

indexRouter.post('/new', (req,res)=> {
    messages.push({ id: crypto.randomUUID(), text: req.body.message, user: req.body.user, added: new Date() });
    res.redirect('/');
})

module.exports = indexRouter;