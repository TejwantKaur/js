const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

let posts=[
    {
        id:"1a",
        username:"kaur_tejwant",
        content:"I love coding :)"
    },
    {
        id:"2b",
        username:"watermelon",
        content:"I am Good :)"
    },
    {
        id:"3c",
        username:"sahib_noor",
        content:"I m Genious :)"
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs", { posts });
});
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let { id } = req.params;
    // console.log(id);
    let post = posts.find((p)=> id===p.id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs", { post });
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});