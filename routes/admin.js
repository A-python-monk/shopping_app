const express = require("express");
const path = require('path');

const router = express.Router();

router.post("/form", (req, res) => {
    res.sendFile(path.join(__dirname,"../",'views','addproduct.html'))
});

router.get("/n", (req, res) => {
  console.log(req.body);
  res.redirect("/shubham");
});


module.exports = router;