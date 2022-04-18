const express = require("express");
const bodyparser = require("body-parser"); 
const adminroutes = require("./routes/admin");
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended: false}));

app.get('/admin',adminroutes)
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/shubham", (req, res) => res.send("Hello Shubham!"));

app.use((req,res,next)=>{
  res.send("<h1>Page not found </h1>");
})
app.listen(port);
