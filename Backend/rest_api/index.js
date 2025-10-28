const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

app.get("/",req,res=>{
    res.send(`Server working well!`);
});

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});