const pool = require("./pool");


async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function getSelectedMessage(messageID){
    const { rows }= await pool.query("SELECT * FROM messages WHERE id=$1",[messageID]);
    return rows[0];
}

async function addSelectedMessage(username,message){
   await pool.query("INSERT INTO messages (username,message,dateadded) VALUES ($1,$2,CURRENT_TIMESTAMP)", [username,message]);
}

module.exports = {
    getAllMessages,
    getSelectedMessage,
    addSelectedMessage,
};
  