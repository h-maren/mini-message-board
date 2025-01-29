#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 message VARCHAR ( 255 ),
 username VARCHAR ( 255 ),
 dateadded TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (message,username,dateadded) 
VALUES
  ('Mama always said life was like a box of chocolates','Forrest Gump',CURRENT_TIMESTAMP),
  ('You talking to me\?','Travis Bickle',CURRENT_TIMESTAMP),
  ('I''m scared, all right\?\!','Rocky Balboa',CURRENT_TIMESTAMP)
;`

async function main() {
    console.log("seeding...");
    const client = new Client({
      host: "postgres.railway.internal", // or wherever the db is hosted
      user: "postgres",
      database: "railway",
      password: process.env.PASSWORD,
      port: 5432 // The default port*/
      connectionString:"postgresql://postgres:hereispassword@postgres.railway.internal:5432/railway",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  }

main();