const { Router } = require("express");
const indexRouter= Router(); 

const messages = [
    {
      id: crypto.randomUUID(),
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      id: crypto.randomUUID(),
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

indexRouter.get("/", (req,res) => {
    res.render('index', {title: "Mini Message Board", messages: messages});
});

indexRouter.get("/new", (req, res) => {
    res.render('form',);
});

indexRouter.get("/message/:id", (req, res) => {
  const messageID=req.params.id;
  const selectedMessage=messages.find(message =>message.id===messageID);
  res.render('message', {message: selectedMessage});
});

indexRouter.post('/new', (req,res)=> {
    messages.push({ id: crypto.randomUUID(), text: req.body.message, user: req.body.user, added: new Date() });
    res.redirect('/');
})

module.exports = indexRouter;