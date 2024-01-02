import express from "express";
import { connection } from "./postgrsql.js";

const app = express();

const PORT = 3005;

connection();

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
