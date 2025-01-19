const pool = require("./pool");


async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function getSelectedMessage(messageID){
    const { rows }= await pool.query("SELECT * FROM messages WHERE id=$1",[messageID]);
    return rows[0];
}

module.exports = {
    getAllMessages,
    getSelectedMessage
};
  