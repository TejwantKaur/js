const express = require("express");
const app = express();

const port = 3030;

app.set("view engine","ejs");

app.listen(port,()=>{
    console.log(`listening om ${port}`);
});