import { createConnection } from "mysql2";

import { HOST, USER, PASSWORD, DB } from "../config/db.config.js";

const connection = createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DB,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Uspešno povezivanje na bazu podataka.");
});

export default connection;
