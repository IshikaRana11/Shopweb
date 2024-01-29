import express from "express";
import * as url from "url";
import path from "path";
import { MongoClient } from "mongodb";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const viewpath = path.join(__dirname, "view");
const app = express();
const client = new MongoClient("mongodb://localhost:27017/");
client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
//const db = client.db("ecom");
app.use("/public", express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, resp) => {
  resp.render(`${viewpath}/index.ejs`);
});
app.get("/login", (req, resp) => {
  resp.render(`${viewpath}/login.ejs`);
});
app.get("/signup", (req, resp) => {
  resp.render(`${viewpath}/signup.ejs`);
});
app.listen(5000);
