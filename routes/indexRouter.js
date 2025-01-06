const { Router } = require("express");
const indexRouter= Router(); 

const messages = [
    {
      id: crypto.randomUUID(),
      text: "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
      user: "Forrest Gump",
      added: new Date().toDateString(),
    },
    {
      id: crypto.randomUUID(),
      text: "You talking to me?",
      user: "Travis",
      added: new Date().toDateString(),
    },
    {
      id: crypto.randomUUID(),
      text: "I'm scared, alright?!",
      user: "Rocky",
      added: new Date().toDateString(),
    }
  ];

indexRouter.get("/", (req,res) => {
    res.render('index', {title: "Mini Message Board", messages: messages});
});

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