const db = require('../db/queries');

async function getAllMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", {
      title: "Current users:",
      messages: messages,
    });
};

module.exports = {
    getAllMessages
  };