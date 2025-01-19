const db = require('../db/queries');

async function getAllMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", {
      title: "Current users:",
      messages: messages,
    });
};

async function messageCreateGetForm(req, res) {
    res.render("form", {
      title: "Submit New Message"
    });
};

async function selectedMessageShow(req,res){
    const messageID=req.params.id;
    const selectedMessage = await db.getSelectedMessage(messageID);
    res.render('message', {
        title: "Selected Message Details:",
        message: selectedMessage,
        });
    };

module.exports = {
    getAllMessages,
    messageCreateGetForm,
    selectedMessageShow
  };